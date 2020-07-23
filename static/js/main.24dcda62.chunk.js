(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(6),o=a.n(i),l=(a(14),a(8)),s=a(1),r=a(2),m=a(4),v=a(3),u=function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={willWatch:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(this.props.movie.backdrop_path||this.props.movie.poster_path),alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title"},this.props.movie.title),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("p",{className:"mb-0"},"Rating: ",this.props.movie.vote_average),this.state.willWatch?n.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),e.props.removeMovieFromWillWatch(e.props.movie)}},"Remove Will Watch"):n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),e.props.addMovieToWillWatch(e.props.movie)}},"Add Will Watch")),n.a.createElement("button",{type:"button",onClick:this.props.removeMovie.bind(null,this.props.movie)},"Delete movie")))}}]),a}(n.a.Component),d=a(7),p=a.n(d),h=function(e){var t=e.sort_by,a=e.updateSortBy,c=function(e){return function(){a(e)}},i=function(e){return p()("nav-link",{active:t===e})};return n.a.createElement("ul",{className:"tabs nav nav-pills"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:i("popularity.desc"),onClick:c("popularity.desc")},"Popularity")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:i("revenue.desc"),onClick:c("revenue.desc")},"Revenue desc")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:i("vote_average.desc"),onClick:c("vote_average.desc")},"Vote average desc")))},b=function(e){return n.a.createElement("div",{className:"pagination"},"1")},W=(a(15),function(e){Object(m.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getMovies=function(){fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(e.state.sort_by)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results})}))},e.removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(l.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",currentPage:1,totalPages:1},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by!==this.state.sort_by&&this.getMovies()}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-9"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-lg-6  mb-4"},n.a.createElement(h,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy})),n.a.createElement("div",{className:"col-lg-6 mb-4"},n.a.createElement(b,null)),this.state.movies.map((function(t){return n.a.createElement("div",{className:"col-lg-6 col-12 mb-4",key:t.id},n.a.createElement(u,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))})))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement("p",null,"Will watch: ",this.state.moviesWillWatch.length))))}}]),a}(n.a.Component));a(16);o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.24dcda62.chunk.js.map