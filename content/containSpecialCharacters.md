---
slug: containSpecialCharacters
title: containSpecialCharacters
description: required validator
titleExplained : Special characters in input

---

"containSpecialCharacters" keyword will order Form Rider to check the input for the existence of special characters such as : **!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?.**
As a validator parameter it can be either a single Boolean value such as true/false or an array of tow values on of them is true and the other one is an intValue.

---

```JSON
{
    "containSpecialCharacter" : [true, "custom error message"] 
}
```

**Validator parameter** : _true_

**Use Case** : User input should only contain special characters and nothing else

**Example** :

```JSON
{
    "containSpecialCharacter" : [true, "Input should contain only special characters"] 
}
```

User input : _Hello I am a user @|[{_ ::: won’t pass

User input : _@|[{_ ::: will pass

---

```JSON
{
    "containSpecialCharacter" : [false, "custom error message"] 
}
```

**Validator parameter** : _false_

**Use Case** : User input should not contain any special characters

**Example** :

```JSON
{
    "containSpecialCharacter" : [false, "Input should not contain any special characters"] 
}
```

User input : _Hello I am a user @|[{_ ::: won’t pass

User input : _Hello I am a user_ will ::: pass

---

```JSON
{
    "containSpecialCharacter" : [[intValue, true], "custom error message"] 
}
```

**Validator parameter** : _[intValue, true]_

**Use Case** : User input should contain at least _intValue_ number of special characters

**Example** :

```JSON
{
    "containSpecialCharacter" : [[2, true], "not less than 2 special characters"] 
}
```

User input : _Hello I am a user @|[{_ ::: will pass

User input : _Hello I am a user @_ ::: won’t pass

---

```JSON
{
    "containSpecialCharacter" : [[true, intValue], "custom error message"] 
}
```

**Validator parameter** : _[true, intValue]_

**Use Case** : user input shouldn’t contain more than _intValue_ number of special characters

**Example** :

```JSON
{
    "containSpecialCharacter" : [[true, 3], "should not contain any special characters"] 
}
```

User input : _Hello I am a user @|[{_ ::: won’t pass

User input : _Hello I am a user @|[_ ::: will pass

---

```JSON
{
    "containSpecialCharacter" : [[intValue1, intValue2], "custom error message"] 
}
```

**Validator parameter** : _[intValue1, intValue2]_

**Use Case** : User input should contain between _intValue1_(included) and _intValue2_(included) number of special characters.

**Example** :

```JSON
{
    "containSpecialCharacter" : [[1, 3], "should not contain any special characters"] 
}
```

User input : _Hello I am a user @|[{_ ::: won’t pass

User input : _Hello I am a user @_ ::: will pass

---
