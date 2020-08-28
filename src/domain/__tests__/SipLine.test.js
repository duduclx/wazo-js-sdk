import SipLine from '../SipLine';

describe('SipLine domain', () => {
  it('can tell if we have videoConference capabilities', () => {
    const getSipLine = (options) => new SipLine({ options });

    expect(getSipLine([['max_audio_streams', '1'], ['max_video_streams', '2']]).hasVideoConference()).toBe(true);
    expect(getSipLine([['max_audio_streams', '1'], ['max_video_streams', '1']]).hasVideoConference()).toBe(false);
    expect(getSipLine([['max_audio_streams', '2']]).hasVideoConference()).toBe(false);
    expect(getSipLine([['max_video_streams', '2']]).hasVideoConference()).toBe(false);
    expect(getSipLine([['max_audio_streams', '2'], ['max_video_streams', '2']]).hasVideoConference()).toBe(true);
  });
});