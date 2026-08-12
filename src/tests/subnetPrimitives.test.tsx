import { describe, it, expect } from 'vitest'
import { formatCidrMask, matchValidSubnet, parseAddr, formatAddr, parseCidrMask } from '../subnetPrimitives'

/**
 * Basics tests for subnet primitives with vitest
 * https://vitest.dev/guide/
 */
describe('formatCidrMask', () => {
  it('should format a cidr mask correctly', () => {
    expect(formatCidrMask(parseCidrMask("/24"))).toBe("/24");
  })
})

describe('matchValidSubnet', () => {


  it("computes 192.168.0.0/24", () => {
    expect(matchValidSubnet("192.168.0.0/24")).toEqual({
      cidr: "192.168.0.0/24",
      start: "192.168.0.0",
      end: "192.168.0.255",
      mask: "255.255.255.0",
      size: 256,
    });
  });
})

describe("parseAddr / formatAddr", () => {
    it("roundtrips class C", () => {
      expect(formatAddr(parseAddr("192.168.1.1"))).toBe("192.168.1.1");
    });
    it("rejects 256.0.0.1", () => {
      expect(() => parseAddr("256.0.0.1")).toThrow("Invalid address");
    });
  });