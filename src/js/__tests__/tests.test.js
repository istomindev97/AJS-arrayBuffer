import ArrayBufferConverter  from '../converter';

import getBuffer from '../getBuffer';

test('should create an instance of ArrayBufferConverter', () => {
    const converter = new ArrayBufferConverter();
    expect(converter).toBeInstanceOf(ArrayBufferConverter);
  });

  test('should load ArrayBuffer correctly', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();

    converter.load(buffer);

    expect(converter.buffer).toEqual(buffer); 
  });

  test('should convert ArrayBuffer to string correctly', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    
    converter.load(buffer);
    const result = converter.toString();
    
    const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(result).toBe(expected); 
  });

  test('should return an empty string for an empty buffer', () => {
    const converter = new ArrayBufferConverter();
    const emptyBuffer = new ArrayBuffer(0); 

    converter.load(emptyBuffer);
    const result = converter.toString();

    expect(result).toBe('');
  });