export const USER_LOGGED_IN = 'USER_LOGGED_IN'; //ссылка на вход в панели навигации
export const USER_REGISTRATION = 'USER_REGISTRATION'; //ссылка на регистрацию в панели навигации
export const USER_NOT_LOGGED_IN = 'USER_NOT_LOGGED_IN'; //кнопка отмены в форме входа юзера
export const USER_REGISTRATION_NOT = 'USER_REGISTRATION_NOT'; // кнопка отмена в форме регистрации юзера
export const USER_SUBMIT = 'USER_SUBMIT'; //нажатие на кнопку войти в форме авторизации
export const USER_NAME = 'USER_NAME'; // ввод имени в поле авторизации
export const USER_PASSWORD = 'USER_PASSWORD'; //ввод пароля в форме авторизации
export const GET_TOPICS = 'GET_TOPICS'; //нужно для функции в разделе загрузка статей
export const ENABLE_COMMENTS = 'ENABLE_COMMENTS'; //событие возникает при нажалии на кнопку "комментарии" в статьях
export const USER_LOGOUT = 'USER_LOGOUT';   // нажали кнопку выйти в нав.панели режим юзер
export const USER_REGISTER_OVER = 'USER_REGISTER_OVER'; //нажали кнопку "продолжить" в модальном окне информации о статусе регистрации пользователя

export const NEW_USER_REG_TRY = 'NEW_USER_REG_TRY'; //нажали на кнопку отправки нового юзера на регистрацию
export const NEW_USER_NAME = 'NEW_USER_NAME'; // ввод имени в форме регистрации юзера
export const NEW_USER_SURNAME = 'NEW_USER_SURNAME'; //ввод фамилии в форме регистрации юзера
export const NEW_USER_MAIL = 'NEW_USER_MAIL'; //ввод почты в форме регистрации юзера
export const NEW_USER_PHONE = 'NEW_USER_PHONE'; //ввод номера телефона в форме регистрации юзера

export const USER_PRESS_LIKE = 'USER_PRESS_LIKE'; //юзер нажал на кнопку "нравится" в форме статьи
export const USER_PRESS_DIZLIKE = 'USER_PRESS_DIZLIKE'; //юзер нажал на кнопку "Не нравится" в форме статьи

export const ADD_NEW_TOPIC = 'ADD_NEW_TOPIC'; //нажали на ссылку "добавить статью" в навигационной панели
export const ADD_NEW_TOPIC_BODY = 'ADD_NEW_TOPIC_BODY';//ввод текста в основном окне редактирования статьи
export const ADD_NEW_TOPIC_HEADER = 'ADD_NEW_TOPIC_HEADER'; // ввод заголовка в окне редактирования статьи
export const NO_ADDING_NEW_TOPIC = 'NO_ADDING_NEW_TOPIC'; // кнопка "отмена" в окне редактирования статей
export const ACCEPT_NEW_TOPIC = 'ACCEPT_NEW_TOPIC';//кнопка "Добавить статью" в окне редактирования статей
export const CLOSE_COMMENTS = 'CLOSE_COMMENTS';//кнопка "свернуть комментарии" в окне комментариев на вкладке "статьи"
export const ADD_COMMENT = 'ADD_COMMENT'; //кнопка "добавить комментарий" в режиме просмотра статей, когда пользователь зашел
export const NO_ADDING_COMMENT = 'NO_ADDING_COMMENT'; //кнопка "отмена" в форме добавления комментариев
export const GET_COMMENT_BODY = 'GET_COMMENT_BODY'; //ввод комментария в текстовое поле формы комментария
export const ACCEPT_NEW_COMMENT = 'ACCEPT_NEW_COMMENT';//кнопка "добавить коммнтарий" в форме отправки комментария


///************************************************************************

//асинхронный запрос на загрузку пользователей с сайта https://jsonplaceholder.typicode.com/users
export const USERS_START_LOADING = 'USERS_START_LOADING';
export const USERS_LOADING_SUCCESFUL = 'USERS_LOADING_SUCCESFUL';
export const USERS_LOADING_FAILED ='USERS_LOADING_FAILED';
//асинхронный запрос на загрузку комментариев пользователей с сайта https://jsonplaceholder.typicode.com/comments
export const COMMENTS_START_LOADING = 'COMMENTS_START_LOADING';
export const COMMENTS_LOADING_SUCCESFUL ='COMMENTS_LOADING_SUCCESFUL';
export const COMMENTS_LOADING_FAILED ='COMMENTS_LOADING_FAILED';
//асинхронный запрос на загрузку изображений галереи с сайта https://jsonplaceholder.typicode.com/photos
export const IMAGES_START_LOADING = 'IMAGES_START_LOADING';
export const IMAGES_LOADING_SUCCESFUL = 'IMAGES_LOADING_SUCCESFUL';
export const IMAGES_LOADING_FAILED = 'IMAGES_LOADING_FAILED';
