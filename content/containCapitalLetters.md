---
slug: containCapitalLetters
title: containCapitalLetters
description: required validator
titleExplained : Input Contain capital letters

---

"containCapitalLetters" will check for the existence of capital letters in the user input, "containCapitalLetters" won’t be affected by other type of characters such as numbers and special characters.

---

```JSON
{
    "containCapitalLetters" : [true, "custom error message"]
}
```

**Validator parameter** : _true_

**Use Case** : User input should only contain capital letters

**Example** :

```JSON
{
    "containCapitalLetters" : [true, "Input can only contain capital letters"]
}
```

User input : _HeLLO I am a User_ ::: won’t pass

User input : _HELLO I AM A USER_ ::: will pass

User input : _HELLO I AM A USER @_ ::: will pass

---

```JSON
{
    "containCapitalLetters" : [false, "custom error message"]
}
```

**Validator parameter** : _false_

**Use Case** : User input should not contain any capital letters

**Example** :

```JSON
{
    "containCapitalLetters" : [false, "input cannot contain capital letters"]
}
```

User input : _HeLLO I am a User_ ::: won’t pass

User input : _hello i am a user_ ::: will pass

User input : _hello i am a user @_ ::: will pass

---

```JSON
{
    "containCapitalLetters" : [intValue , "custom error message"]
}
```

**Validator parameter** : _intValue_

**Use Case** : User input should contain intValue number of capital letters

**Example** :

```JSON
{
    "containCapitalLetters" : [3 , "custom error message"]
}
```

User input : _HELo i am a user_ ::: will pass

User input : _hello i am A USER_ ::: won’t pass

---

```JSON
{
    "containCapitalLetters" : [[intValue, true], "custom error message"]
}
```

**Validator parameter** : _[intValue, true]_

**Use Case** : User input should contain at least intValue number of capital letters

**Example** :

```JSON
{
    "containCapitalLetters" : [[3, true], "Input should contain 3 capital letters"]
}
```

User input : _HELo i am a user_ ::: will pass

User input : _hello i am A USER_ ::: won’t pass

---

```JSON
{
    "containCapitalLetters" : [[true, intValue], "custom error message"]
}
```

**Validator parameter** : _[true, intValue]_

**Use Case** : User input should contain maximum of intValue  number capital letters

**Example** :

```JSON
{
    "containCapitalLetters" : [[true, 3], "Not more than 3 capital letters"]
}
```

User input : _HELo i am a user_ will pass

User input : _hello i am A USER_ won’t pass

---

```JSON
{
    "containCapitalLetters" : [[intValue1, intValue2], "custom error message"]
}
```

**Validator parameter** : _[intValue1, intValue2]_

**Use Case** : user input should contain between intValue1(included) and intValue2(included) number of capital letters

**Example** :

```JSON
{
    "containCapitalLetters" : [[3, 5], "Only between 3 and 5 capital letters"]
}
```

User input : _HELo i am a user_ will pass

User input : _hello i am A USER_ will pass

User input : _hello I am a user_ won’t pass
