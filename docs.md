# Application flow

- Create a user calling api `api/v1/auth/register`
- Login and get token from `api/v1/auth/login`
- Create an app `api/v1/apps`
- create an audience for that app using app secret `api/v1/audience`
- Associate a audience with app using api `api/v1/audience/:audienceId/channels`
- Create a notification by passing appropriate payload
