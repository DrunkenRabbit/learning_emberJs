import Model, { attr, hasMany } from '@ember-data/model';

export default class BookModel extends Model {
  @attr("string") bookTitle;
  @attr("string") authorName;
  @attr("string") bookCoverUrl;
  @attr("string") tags;
  @attr("number") rating;
  @attr("number") numberOfPages;
  @attr("string") description;
}
