---
slug: containSmallLetters
title: containSmallLetters
description: required validator
titleExplained : Input Contain smaill letters

---

"containSmallLetters" will check for the existence of small letters in the user input, "containSmallLetters" won’t be affected by other type of characters such as numbers and special characters.

---

```JSON
{
    "containSmallLetters" : [true, "custom error message"]
}
```

**Validator parameter** : _true_

**Use Case** : user input should not contain any capital letters

**Example** :

```JSON
{
    "containSmallLetters" : [true, "Input cannot contain capital letters"]
}
```

User input : _hello i am a user_ ::: will pass

User input : _Hello I am a user_ ::: won’t pass

---

```JSON
{
    "containSmallLetters" : [false, "custom error message"]
}
```

**Validator parameter** : _false_

**Use Case** : user input should not contain any small letters

**Example** :

```JSON
{
    "containSmallLetters" : [false, "Input cannot contain any small letters"]
}
```

User input : _Hello I am a user_ ::: won’t pass

User input : _HELLO I AM A USER_ ::: will pass

User input : _HELLO I AM A USER @_ ::: will pass

---

```JSON
{
    "containSmallLetters" : [intValue, "custom error message"]
}
```

**Validator parameter** : intValue

**Use Case** : User input should contain intValue number of small letters

**Example** :

```JSON
{
    "containSmallLetters" : [intValue, "custom error message"]
}
```

User input : _Hello I am a user_ ::: won’t pass

User input : _HELLO I AM A User_ ::: will pass

---

```JSON
{
    "containSmallLetters" : [[intValue, true], "custom error message"]
}
```

**Validator parameter** : _[intValue, true]_

**Use Case** : User input should contain at least intValue number of small letters

**Example** :

```JSON
{
    "containSmallLetters" : [[3, true], "custom error message"]
}
```

User input : _Hello I am a user_ ::: will pass

User input : _HELLO I AM A USer_ ::: won't pass

---

```JSON
{
    "containSmallLetters" : [[true, intValue], "custom error message"]
}
```

**Validator parameter** : _[true, intValue]_

**Use Case** : User input should not contain more than intValue number of small letters

**Example** :

```JSON
{
    "containSmallLetters" : [[true, 3], "cannot contain more than 3 small characters"]
}
```

User input : _Hello I am a user_ ::: won't pass

User input : _HELLO I AM A User_ ::: will pass

---

```JSON
{
    "containSmallLetters" : [[intValue1, intValue2], "custom error message"]
}
```

**Validator parameter** : _[intValue1, intValue2]_

**Use Case** : User input should contain between intValue1(included) and intValue2(included) number of small letter

**Example** :

```JSON
{
    "containSmallLetters" : [[3, 5], "custom error message"]
}
```

User input : _Hello I AM A USER_ ::: will pass

User input : _HELLo I am a user_ ::: won’t pass

User input : _HELLO I AM A USer_ ::: won’t pass
