---
slug: containWhiteSpace
title: containSpecialCharacters
description: required validator
titleExplained : Contain white spaces

---


“containWhiteSpace” keyword will check for the existence of white spaces  in a given input, it can only take an array of two values as a validator parameter, it can limit white spaces in the input.

---

```JSON
{
    "containWhiteSpace" : [[true, true],"custom error message"]
}
```

**Validator parameter** : _[true, true]_

**Use Case** : User input can contain white spaces

---

```JSON
{
    "containWhiteSpace" : [[true, false],"custom error message"]
}
```

**Validator parameter** : _[true, false]_

**Use Case** : user input can contain white spaces but cannot start with white space

---

```JSON
{
    "containWhiteSpace" : [[false, false],"custom error message"]
}
```

**Validator parameter** : _[false, false]_

**Use Case** : user input cannot contain white spaces, also, it cannot start with white spaces.
Example :
