(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),l=(a(14),a(8)),o=a(1),s=a(2),m=a(4),u=a(3),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={willWatch:!1},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(this.props.movie.backdrop_path||this.props.movie.poster_path),alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},this.props.movie.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mb-3"},"Rating: ",this.props.movie.vote_average)),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"button",onClick:this.props.removeMovie.bind(null,this.props.movie),className:"btn-delete"},"Delete movie"),this.state.willWatch?c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),e.props.removeMovieFromWillWatch(e.props.movie)}},"Remove Will Watch"):c.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),e.props.addMovieToWillWatch(e.props.movie)}},"Add Will Watch"))))}}]),a}(c.a.Component),p=a(7),d=a.n(p),h=function(e){var t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){a(e)}},r=function(e){return d()("nav-link",{active:t===e})};return c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("popularity.desc"),onClick:n("popularity.desc")},"Popularity")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("revenue.desc"),onClick:n("revenue.desc")},"Revenue desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:r("vote_average.desc"),onClick:n("vote_average.desc")},"Vote average desc")))},g=function(e){var t=e.currentPage,a=e.totalPages,n=e.changeCurrentPage,r=Array.from(Array(a),(function(e,t){return t+1})).map((function(e){var r="".concat(t===e?"active":"");if(1===e||e===a||e>=t-1&&e<=t+2)return c.a.createElement("li",{key:e,className:"page-link ".concat(r),onClick:function(){return n(e)}},e)}));return c.a.createElement("nav",{"aria-label":"Page navigation example "},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:"page-item",onClick:function(){return n(t-1)}},c.a.createElement("a",{className:"page-link",href:"#!","aria-label":"Previous"},c.a.createElement("span",{"aria-hidden":"true"},"\xab"),c.a.createElement("span",{className:"sr-only"},"Previous"))),r,c.a.createElement("li",{className:"page-item",onClick:function(){return n(t+1)}},c.a.createElement("a",{className:"page-link",href:"#!","aria-label":"Next"},c.a.createElement("span",{"aria-hidden":"true"},"\xbb"),c.a.createElement("span",{className:"sr-only"},"Next")))))},f=(a(15),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).getMovies=function(){fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.currentPage)).then((function(e){return e.json()})).then((function(t){e.setState({movies:t.results,totalPages:t.total_pages}),console.log(t)}))},e.removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(l.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t,currentPage:1})},e.changeCurrentPage=function(t){t>0&&e.setState({currentPage:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",currentPage:1,totalPages:0},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){t.sort_by===this.state.sort_by&&t.currentPage===this.state.currentPage||this.getMovies()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-9 col-12"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 col/div>-12 mb-4"},c.a.createElement(h,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),c.a.createElement("div",{className:"row align-items-center"},this.state.movies.map((function(t){return c.a.createElement("div",{className:"col-lg-6 col-12 mb-4",key:t.id},c.a.createElement(v,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))})))),c.a.createElement("div",{className:"col-lg-3 col-12"},c.a.createElement("p",null,"Will watch: ",this.state.moviesWillWatch.length))),c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-12 col-12 justify-content-center"},c.a.createElement(g,{currentPage:this.state.currentPage,totalPages:this.state.totalPages,changeCurrentPage:this.changeCurrentPage}))))}}]),a}(c.a.Component));a(16);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.0647bf31.chunk.js.map