---
slug: radioRequired
title: radioRequried
description: required radio input validator
titleExplained : required radio input validator
---

* _"radioRequired"_ validator will check if a radio button is checked or not.

* _radioRequired_ is to be used ideally with [_(inCommon)the conditional required_](/docs/conditionalRequired)

---

```JSON

{
    "radioRequired" : [true, "custom error message"]
}

```

**validator parameter** : _true_

**Use Case** : the input containing _radioRequired_ set to true should be checked, otherwise the form won't be submit.
**Example** :

```JSON
{
    "radioRequired" : [true, "this radio button should be checked"]
}
```

---

_radioRequired_ is to be used ideally with [_(inCommon)the conditional required_](/docs/conditionalRequired)