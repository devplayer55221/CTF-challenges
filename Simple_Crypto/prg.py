from Crypto.Cipher import AES
import base64

print("hello world")
smp_str = "WkVkb2NHTXhPWEJqTVRrMVlqTldlVmd6WkhaamJWRTk="
smpstr1 = smp_str.encode("ascii")
basestr1 = base64.b64decode(smpstr1)
basestr2 = base64.b64decode(basestr1)
basestr3 = base64.b64decode(basestr2)

print(basestr1)
print(basestr2)
print(basestr3)
