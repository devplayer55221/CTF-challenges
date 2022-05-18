import base64

yourword="this_is_your_word"

sum=""
list=[]
for i in yourword:
    sum+=hex(ord(i))
    list.append(ord(i))
print("----------------your word-------------")
print(sum)
print(list)


flag="Mystiko{eAsY_tRY}"

listg=['9', '\x11', '\x1a', '\x07', '6', '\x02', '\x1c', '$', '\x1c', '.', '\x06', '+', '\x00', '\x03', '=', '+', '\x19']
list2=[]
sum=""
for i in listg:
    sum+=hex(ord(i))
    list2.append(ord(i))
print("----------------given word-------------")
print(sum)
print(list2)


print("-----------result------------------")

j=0
sum=""
list3=[]
list4=[]
for i in range(len(list2)):
    sum+=hex(list[j]^list2[j])
    list3.append(list[j]^list2[j])
    list4.append(chr(list[j]^list2[j]))
    j+=1
print(sum)
print(list3)
print(list4)