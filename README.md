# App Service Demo Project

## TODO

1. Ensure that people who run the demo have name, company and location populated in their profile so we can get the data when we run a query.

## Deployment

### Let's Chat

1. Create a MongoDB.

2. Create a Web App on Linux

    App settings:

    * DOCKER_CUSTOM_IMAGE_NAME: tylerlu/lets-chat
    * LCB_DATABASE_URI: <MongoDB Connection String>

### Reset a demo user account

These steps delete all the data in the database for a user.  This allows you to log in with the user and do any demo steps entirely from scratch.

1. Browse to the profile page.

	http://< server >/profile

2. Copy the **ID** at the end of the URL, in this example the ID is 243.

	**Example:** http://< server >/profile/243

3. Replace the placeholder for the @user_id variable with the UserId you copied from the profile page URL.
4. Execute the following SQL statements:

	```
	SET @user_id=<User Id you copied from profile page URL, for example: 243>;
	DELETE FROM `my_sql_db`.`friend` WHERE `user_id`=@user_id ;
	DELETE FROM `my_sql_db`.`friend` WHERE `friend_id`=@user_id;
	DELETE FROM `my_sql_db`.`position` WHERE `profile_id`=@user_id;
	DELETE FROM `my_sql_db`.`profile` WHERE `id`=@user_id;
	DELETE FROM `my_sql_db`.`usersocialauth` WHERE `user_id`=@user_id;
	DELETE FROM `my_sql_db`.`user` WHERE `id`=@user_id;
	```
