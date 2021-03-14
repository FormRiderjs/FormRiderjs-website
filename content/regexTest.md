---
slug: regexTest
title: regexTest
description: required validator
titleExplained : Apply regex test on an input

---

"regexTest" keyword will order FormRider to check for regular expressions.

```JSON
{
    "regexTest" : [[source, flag],"custom error message"]
}
```

**Validator parameter** : _[“source” , “flag”]_, if you don’t want to put any flag leave the flag field empty  like that -> regexTest : [_[“source” , “”]_,”custom error message”]

**Use case** : Show an error notification if input contains _source_

**Example** :

```JSON
{
    "regexTest" : [["-+","g"], "custom error message"]
}
```

User input : _Hello I am a user_ will pass

User input : _Hello I am a-user_ won’t pass
