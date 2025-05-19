import { describe, expect, test, } from '@jest/globals';
import commandTip from '~/lib/commandTip';

describe('[Function] commandTip;', () => {
  test('The command tip should show the correct.', async () => {
    expect(commandTip('parse', 'Parse input fulmination file and output to terminal.')).toMatch('(+): - (+) bold: * parse (+): * Parse input fulmination file and output to terminal.');
  });
});
