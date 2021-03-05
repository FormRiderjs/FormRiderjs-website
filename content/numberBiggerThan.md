---
slug: numberBiggerThan
title: numberBiggerThan
description: required validator
titleExplained : Input is a number bigger than
---

When using "numberBiggerThan" input should only contain a number, and this number should be bigger than intValue.

---

```JSON
{
    "numberBiggerThan" : [intValue, "custom error message"]
}
```

**Validator parameter** : _intValue_
**Use case** : the input should be only a number, this number should be bigger than intValue.
**Example** :

```JSON
{
    "numberBiggerThan" : [3, "The input is not bigger than 3"]
}
```

User input : _Hello I am a user 4_ ::: won’t pass

User input : _5_ ::: will pass

