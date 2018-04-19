import { getQuery, getCookie, formatDate } from '@/util/';

describe('# getQuery', () => {
  /** 
   * 这里就涉及到了jest.config.js里面配置的testURL，这里是不能动态修改location.href的，不信可以试试
   * testURL: 'https://test.com?empty=&num=0&str=str&cstr=中文&encode=%e4%b8%ad%e6%96%87',
   */
  it('empty => ""', () => {
    expect(getQuery('empty')).toBe('');
  });

  it('num => 0', () => {
    expect(getQuery('num')).toBe('0');
  });

  it('str => str', () => {
    expect(getQuery('str')).toBe('str');
  });

  it('cstr => 中文', () => {
    expect(getQuery('cstr')).toBe('中文');
  });

  it('encode => 中文', () => {
    expect(getQuery('encode')).toBe('中文');
  });
  
  it('null => null', () => {
    expect(getQuery('null')).toBeNull();
  });
});

describe('# getCookie', () => {
  /**
   * 这里可以操作cookie
   */
  document.cookie = 'key1=value1;';
  document.cookie = 'key2=value2';

  it('getCookie("key1") => "value1"', () => {
    expect(getCookie('key1')).toBe('value1');
  });

  it('getCookie("key2") => "value2"', () => {
    expect(getCookie('key2')).toBe('value2');
  });

  it('getCookie("null") => null', () => {
    expect(getCookie('null')).toBeNull();
  });
});

describe('# formatDate', () => {
  const DATE_0 = new Date(0);

  it('formatDate(DATE_0) => "1970-01-01 08:00:00"', () => {
    expect(formatDate(DATE_0)).toBe('1970-01-01 08:00:00');
  });

  it('formatDate(DATE_0, "M-d h:m:s") => "1-1 8:0:0"', () => {
    expect(formatDate(DATE_0, 'M-d h:m:s')).toBe('1-1 8:0:0');
  });

  it('formatDate("test") => null', () => {
    expect(formatDate('test')).toBe(null);
  });
});