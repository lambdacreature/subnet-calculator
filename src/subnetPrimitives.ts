
const octetPattern = "([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
const nonCapturingOctetPattern = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";

const nonCapturingAddrPattern = `${nonCapturingOctetPattern}\\.${nonCapturingOctetPattern}\\.${nonCapturingOctetPattern}\\.${nonCapturingOctetPattern}`;
const addrPattern = `${octetPattern}\\.${octetPattern}\\.${octetPattern}\\.${octetPattern}`;

const maskPattern = "(/(?:[0-9]|[1-2][0-9]|3[0-2]))";

const addrRegex = new RegExp(`^${addrPattern}\$`);
const cidrSubnetRegex = new RegExp(`^[ \t]*(${nonCapturingAddrPattern})${maskPattern}[ \t]*\$`);

export const parseAddr = (addrString: string) => {
  const matches = addrString.match(addrRegex);

  if (matches == null) {
    throw new Error("Invalid address");
  }

  const [ _, octet3String, octet2String, octet1String, octet0String ] = matches;
  const octet3 = parseInt(octet3String); 
  const octet2 = parseInt(octet2String); 
  const octet1 = parseInt(octet1String); 
  const octet0 = parseInt(octet0String); 

  const addr = (octet3 << (8*3)) | (octet2 << (8*2)) | (octet1 << 8) | octet0;
  return addr;
};

export const formatAddr = (addr: number) => {
  const octet3 = (addr >> (8*3)) & 255; 
  const octet2 = (addr >> (8*2)) & 255; 
  const octet1 = (addr >> (8*1)) & 255; 
  const octet0 = (addr >> (8*0)) & 255; 

  const addrString = `${octet3}.${octet2}.${octet1}.${octet0}`;
  return addrString;
};

export const parseCidrMask = (maskString: string) => {
  let mask = 0;
  for (let i = 31; i > 31 - parseInt(maskString.slice(1)); i--) {
    mask = mask | (1 << i)
  }
  return mask;
};

export const formatCidrMask = (mask: number) => {
  let bitCount = 0;
  for (let i = 0; i < 32; i++) {
    bitCount += (mask >> i) & 1
  }
  return `/${bitCount}`;
};

export const matchValidSubnet = (candidate: string) => {
  const matches = candidate.match(cidrSubnetRegex);

  if (matches == null) {
    return null;
  }

  const [ _, addrString, cidrMaskString ] = matches;


  const addr  = parseAddr(addrString);
  const parsedMask  = parseCidrMask(cidrMaskString);


  const cidr  = addrString + cidrMaskString;
  const start = formatAddr(addr &  parsedMask);
  const end   = formatAddr(addr | ~parsedMask);
  const mask  = formatAddr(parsedMask)
  const size  = 2 ** (32 - parseInt(cidrMaskString.slice(1)));
 

  const subnetData = {
    cidr, start, end, mask, size
  };

  return subnetData;
};
