--- 

slug : notifications
title : Notifications
description : notifications

---



* ### What is a UINotification.js
  A UINotification is the User Interface notification, its what will notify the user of the result of the form submission, if there is errors then the notification won’t show them, if there is no errors then Form Rider will show a submission confirmation notification. 


* ### Create your own notification
  you can create your own notification design. There is only few conditions to respect.

  * ### What can i change in UINotifications.js ?
    You can add animation when the notification is being created, animations when closing the notification, colors, arranging errors, etc…

  * ### Any rules ?
    Yup, have a look at the basic UINotification code file, there is 3 methods to be kept in every design you create, you should keep these methods name and their functionalities but you are free to modify the way they work.
    
    ```Javascript
        static closePrecedentNotifications(notification);

        function closeNoticiationAutomatically(notification, inputValidationErrorArray, delayBeforeClosing);

        function closeNotificationManyally(noticication, closeBoxButton);
    ```
