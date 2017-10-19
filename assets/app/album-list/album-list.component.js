angular.module('app-devsar')
.component('albumList', {
  templateUrl: 'assets/app/album-list/album-list.template.html',
  controller: ['$http', function AlbumListController($http) {
    let self = this;
    $http.get('/api/v1/albums/').then((response) => self.albums = response.data.items);

    this.popularityRange = function(popularity) {
      return new Array(popularity);
    }

    this.joinGenres = function(genres) {
      return genres.join(', ');
    }
  }]
})
