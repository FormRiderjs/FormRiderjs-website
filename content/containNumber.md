---
slug: containNumber
title: containNumber
description: required validator
titleExplained : Counting numbers in input
---

"containNumber" keyword validator will check the input for several things, as the validator parameter it can have either a Boolean or an array of two elements one of them is true and the other one is an intValue, containNumber will only count numbers of int type.

---

```JSON
{
    "containNumber" : [true, "custom error message"]
}
```

**Validator parameter** : _true_

**Use case** : the input should be only numbers numbers of int type.

**Example** : 

```JSON
{
    "containNumber" : [true, "Input should contain only numbers"]
}
```

User input : _123_ ::: will pass

User input : _Hello I am a user 123_ ::: won’t pass

User input : _1.9_ ::: won’t pass

---

```JSON
{
    "containNumber" : [false, "custom error message"]
}
```

**Validator parameter** : _false_

**Use case** : the input should not contain any numbers.

**Example** : 

```JSON
{
    "containNumber" : [false, "Input should not contain any numbers"]
}
```

User input : _Hello I am a user 123_ ::: won’t pass

User input : _Hello I am a user_  ::: will pass

---

```JSON
{
    "containNumber" : [inValue, "custom error message"]
}
```

**Validator parameter** : _intValue_

**Use case** : Input should contain intValue number of numbers of int type.

**Example** : 

```JSON
{
    "containNumber" : [2, "Input should not contain any numbers"]
}
```

User input : _Hello I am a user 123_ ::: won’t pass

User input : _Hello I am a user 12_  ::: will pass

---

```JSON
{
    "containNumber" : [[inValue, true], "custom error message"]
}
```

**Validator parameter** : _[intValue, true]_

**Use case** : Input should contain at least intValue of numbers.

**Example** : 

```JSON
{
    "containNumber" : [[3, true], "Input should contain at least 3 numbers"]
}
```

User input : _Hello I am a user 123_ ::: will pass

User input : _Hello I am a user 12_  ::: won’t pass

---

```JSON
{
    "containNumber" : [[true, intValue], "custom error message"]
}
```

**Validator parameter** : _[true, intValue]_

**Use case** : Input should not contain more than intValue number of numbers.

**Example** : 

```JSON
{
    "containNumber" : [[true, 3], "Input should contain at least 3 numbers"]
}
```

User input : _Hello I am a user 12_ will pass

User input : _Hello I am a user 1234_  won’t pass

---

```JSON
{
    "containNumber" : [[intValue, intValue], "custom error message"]
}
```

**Validator parameter** : _[intValue, intValue]_

**Use case** : Input should not contain numbers between intValue1(included) and intValue2(included)

**Example** : 

```JSON
{
    "containNumber" : [[3, 5], "Input should contain 3 and 5 number of numbers"]
}
```

User input : _Hello I am a user 123_ ::: will pass

User input : _Hello I am a user 1234_ ::: will pass

User input : _Hello I am a user 12345_  ::: will pass

User input : _Hello I am a user 123456_ ::: won’t pass

---
