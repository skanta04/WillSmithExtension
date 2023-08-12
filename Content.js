let willSmithImages = [
    "https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLj7-G9DdB_CZV65layMV5BYJ1BxCH8ZhPQat1bYGC&s",
    "https://www.goldenglobes.com/sites/default/files/styles/homepage_carousel/public/2021-10/will-smith-c-hfpa-2016.jpg?h=645e0a46&itok=Y3FvNt1F",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fwill-smith&psig=AOvVaw3XNsV_rxVJIPI4Mde6hdHm&ust=1691884765435000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPDgsoXo1YADFQAAAAAdAAAAABAV",
    "https://www.wallpaperflare.com/static/233/769/203/will-smith-actor-look-jacket-wallpaper-preview.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1094050758.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/gettyimages-141321984-1569268766.jpg"
];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * willSmithImages.length)
    imgs[i].src = willSmithImages[randomImg]
}