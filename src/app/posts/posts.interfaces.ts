export interface Post {
  /** 
   * Уникальный идентификатор пользователя
   * @example 1
  */
  userId: number;
  /** 
   * Уникальный идентификатор поста
   * @example 1
  */
  id: number;
  /** 
   * Уникальный заголовок поста
   * @example 'Заголовок'
  */
  title: string;
  /** 
   * Уникальный текст поста
   * @example 'текст'
  */
  body: string;
}
