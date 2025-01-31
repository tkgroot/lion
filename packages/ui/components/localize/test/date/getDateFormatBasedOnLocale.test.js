import { expect } from '@open-wc/testing';
import { localize, getDateFormatBasedOnLocale } from '@lion/ui/localize.js';
import { localizeTearDown } from '@lion/ui/localize-test-helpers.js';

describe('getDateFormatBasedOnLocale()', () => {
  beforeEach(() => {
    localizeTearDown();
  });

  it('returns the positions of day, month and year', async () => {
    localize.locale = 'en-GB';
    expect(getDateFormatBasedOnLocale()).to.equal('day-month-year');
    localize.locale = 'en-US';
    expect(getDateFormatBasedOnLocale()).to.equal('month-day-year');
  });
});
