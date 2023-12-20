recevoir un SMS

Example Message sent by provider
From: "FROM DID" <sip:*FROMDID*@toronto7.voip.ms>
To: <sip:**s**@*WazoIP*:5060;line=hgcjwkv
CSeq: 103 MESSAGE
X-SMS-TO: *ToDID*


pjsip.conf
[voipms]
type = endpoint
transport = transport-udp
context = voipms-inbound
message_context = voipms-sms-in
disallow = all
allow = ulaw
from_user = 123456
outbound_auth = voipms
aors = voipms

extensions.conf
[voipms-sms-in]
exten => _!,1,NoOp(Inbound SMS dialplan invoked)
  same => n,NoOp(To ${MESSAGE(to)})
  same => n,NoOp(From ${MESSAGE(from)})
  same => n,NoOp(Body ${MESSAGE(body)})
  same => n,Hangup()