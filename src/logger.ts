/**
 * Logging utility that respects the MCP_QUIET environment variable
 * When MCP_QUIET=true, all logging is suppressed to prevent JSON parsing errors
 */

const isQuiet = process.env.MCP_QUIET === 'true' || process.env.NODE_ENV === 'production';

export const logger = {
  log: (...args: any[]) => {
    if (!isQuiet) {
      console.log(...args);
    }
  },
  
  error: (...args: any[]) => {
    if (!isQuiet) {
      console.error(...args);
    }
  },
  
  warn: (...args: any[]) => {
    if (!isQuiet) {
      console.warn(...args);
    }
  },
  
  info: (...args: any[]) => {
    if (!isQuiet) {
      console.info(...args);
    }
  },
  
  debug: (...args: any[]) => {
    if (!isQuiet) {
      console.debug(...args);
    }
  }
};

export default logger;
