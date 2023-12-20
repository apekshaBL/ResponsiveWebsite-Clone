 /*import axios from 'axios';
 const movieBaseUrl="https://api.themoviedb.org/3"
 const api_Key='961f0d35d36c8e4a9bd733723b7bb83a'
 //https://api.themoviedb.org/3/movie/550?api_key=961f0d35d36c8e4a9bd733723b7bb83a+
 //const getTrendingVideos=axios.get(this.movieBaseUrl+"/movie/550?api_key"+api_Key);
 const getTrendingVideos=axios.get("https://api.themoviedb.org/3/movie/550?api_key=961f0d35d36c8e4a9bd733723b7bb83a ");

 export default{
    getTrendingVideos
 }
 //this.movieBaseUrl+"/movie/550?api_key"+api_Key*/


 import axios from 'axios';
 const movieBaseUrl="https://api.themoviedb.org/3"
 const api_Key='=961f0d35d36c8e4a9bd733723b7bb83a'
//  https://api.themoviedb.org/3/movie/550?api_key=961f0d35d36c8e4a9bd733723b7bb83a
 const getTrendingVideos=axios.get(movieBaseUrl+"/movie/550?api_key"+api_Key);
 //const getTrendingVideos=axios.get("https://api.themoviedb.org/3/movie/550?api_key=961f0d35d36c8e4a9bd733723b7bb83a ");

 export default{
    getTrendingVideos
 }
 //this.movieBaseUrl+"/movie/550?api_key"+api_Key