import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";
// import {
//   getFooterCopy,
//   getFullYear,
//   getLatestNotification,
// } from "@jest/globals";

describe("Utility functions", () => {
  test('getFullYear returns current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  test('getFooterCopy returns correct string', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getLatestNotification returns correct string', () => {
    const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
  });
});