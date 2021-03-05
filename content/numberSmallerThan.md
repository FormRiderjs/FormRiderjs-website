---
slug: numberSmallerThan
title: numberSmallerThan
description: required validator
titleExplained : Input is a number smaller than

---

When using "numberSmallerThan", input should only contain a number and this number should be smaller than intValue.

```JSON
{
    "numberSmallerThan" : [int value, "custom error message"]
}
```
**Validator parameter** : _intValue_

**Use case** : the input should be only a number smaller than intValue.

**Example** : 

```JSON
{
    "numberSmallerThan" : [3 , "Input is bigger than 3"]
}
```

User input : _Hello I am a user 4_ ::: won’t pass

User input : _3_ ::: won’t pass

User input : _2_ ::: will pass

User input : _-4_ ::: will pass
