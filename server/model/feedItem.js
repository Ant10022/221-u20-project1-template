function feedItem(title, story, linkUrl, imageUrl, date){
    this.title = title;
    this.story = story;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
    this.date = date;
};

exports.createFI = function(title, story, linkUrl, imageUrl, date){
  return new feedItem(title, story, linkUrl, imageUrl, date);
}

console.log("Feed Model is running!");