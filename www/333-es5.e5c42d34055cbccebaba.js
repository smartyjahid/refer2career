!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,i){if(!t)return;if("string"==typeof t)return e(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,i)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkinsta_jobs=self.webpackChunkinsta_jobs||[]).push([[333],{26039:function(e,n,r){r.d(n,{o:function(){return H}});var a=r(3679),s=r(37716),l=r(50986),c=r(56983),d=r(10629),f=r(38583),p=r(54436),u=r(45396),g=r(7539),m=r(59442),h=r(20639);function b(t,e){1&t&&(s.TgZ(0,"span",24),s._uU(1," arrow_drop_down "),s.qZA())}function v(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",30),s.TgZ(1,"div",31),s.TgZ(2,"span",32),s.NdJ("click",function(){return s.CHM(i),s.oxw(3).isSortBy=!0}),s._uU(3,"Relevance"),s.qZA(),s.qZA(),s.TgZ(4,"div",31),s.TgZ(5,"span",32),s.NdJ("click",function(){return s.CHM(i),s.oxw(3).isSortBy=!1}),s._uU(6,"Date"),s.qZA(),s.qZA(),s.qZA()}if(2&t){var n=s.oxw(3);s.xp6(2),s.Q6J("ngClass",!0===n.isSortBy?"sort-by-selected":"sort-by-not-selected"),s.xp6(3),s.Q6J("ngClass",!1===n.isSortBy?"sort-by-selected":"sort-by-not-selected")}}function x(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",25),s.TgZ(1,"div",26),s.NdJ("click",function(){s.CHM(i);var t=s.oxw(2);return t.isSortByExpanded=!t.isSortByExpanded}),s.TgZ(2,"span",27),s._uU(3,"Sort By"),s.qZA(),s.TgZ(4,"span",28),s._uU(5,"expand_more"),s.qZA(),s.qZA(),s.YNc(6,v,7,2,"div",29),s.qZA()}if(2&t){var n=s.oxw(2);s.xp6(4),s.Q6J("ngClass",!0===n.isSortByExpanded?"rotate-right":"rotate-left"),s.xp6(2),s.Q6J("ngIf",n.isSortByExpanded)}}function Z(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",34),s.TgZ(1,"label",35),s._uU(2,"Minimum Experience req. (in years)"),s.qZA(),s.TgZ(3,"mat-slider",36),s.NdJ("ngModelChange",function(t){return s.CHM(i),s.oxw(3).refine.minExp=t}),s.qZA(),s.qZA()}if(2&t){var n=s.oxw(3);s.xp6(3),s.Q6J("ngModel",n.refine.minExp)}}function y(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",25),s.TgZ(1,"div",26),s.NdJ("click",function(){s.CHM(i);var t=s.oxw(2);return t.isExperienceExpanded=!t.isExperienceExpanded}),s.TgZ(2,"span",27),s._uU(3,"Experience"),s.qZA(),s.TgZ(4,"span",28),s._uU(5,"expand_more"),s.qZA(),s.qZA(),s.YNc(6,Z,4,1,"div",33),s.qZA()}if(2&t){var n=s.oxw(2);s.xp6(4),s.Q6J("ngClass",!0===n.isExperienceExpanded?"rotate-right":"rotate-left"),s.xp6(2),s.Q6J("ngIf",n.isExperienceExpanded)}}function w(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",38),s.TgZ(1,"div",39),s.TgZ(2,"span",40),s._uU(3,"Part time"),s.qZA(),s.TgZ(4,"mat-slide-toggle",41),s.NdJ("ngModelChange",function(t){return s.CHM(i),s.oxw(3).refine.partTime=t}),s.qZA(),s.qZA(),s.TgZ(5,"div",42),s.TgZ(6,"span",40),s._uU(7,"Full time"),s.qZA(),s.TgZ(8,"mat-slide-toggle",41),s.NdJ("ngModelChange",function(t){return s.CHM(i),s.oxw(3).refine.fullTime=t}),s.qZA(),s.qZA(),s.TgZ(9,"div",42),s.TgZ(10,"span",40),s._uU(11,"Contractual"),s.qZA(),s.TgZ(12,"mat-slide-toggle",41),s.NdJ("ngModelChange",function(t){return s.CHM(i),s.oxw(3).refine.contractual=t}),s.qZA(),s.qZA(),s.qZA()}if(2&t){var n=s.oxw(3);s.xp6(4),s.Q6J("ngModel",n.refine.partTime),s.xp6(4),s.Q6J("ngModel",n.refine.fullTime),s.xp6(4),s.Q6J("ngModel",n.refine.contractual)}}function T(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",25),s.TgZ(1,"div",26),s.NdJ("click",function(){s.CHM(i);var t=s.oxw(2);return t.isPartTimeExpanded=!t.isPartTimeExpanded}),s.TgZ(2,"span",27),s._uU(3,"Job Type"),s.qZA(),s.TgZ(4,"span",28),s._uU(5," expand_more"),s.qZA(),s.qZA(),s.YNc(6,w,13,3,"div",37),s.qZA()}if(2&t){var n=s.oxw(2);s.xp6(4),s.Q6J("ngClass",!0===n.isPartTimeExpanded?"rotate-right":"rotate-left"),s.xp6(2),s.Q6J("ngIf",n.isPartTimeExpanded)}}function A(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",38),s.TgZ(1,"div",39),s.TgZ(2,"span",40),s._uU(3,"Jobs"),s.qZA(),s.TgZ(4,"mat-slide-toggle",41),s.NdJ("ngModelChange",function(t){return s.CHM(i),s.oxw(3).refine.jobs=t}),s.qZA(),s.qZA(),s.TgZ(5,"div",42),s.TgZ(6,"span",40),s._uU(7,"Internships"),s.qZA(),s.TgZ(8,"mat-slide-toggle",41),s.NdJ("ngModelChange",function(t){return s.CHM(i),s.oxw(3).refine.internships=t}),s.qZA(),s.qZA(),s.qZA()}if(2&t){var n=s.oxw(3);s.xp6(4),s.Q6J("ngModel",n.refine.jobs),s.xp6(4),s.Q6J("ngModel",n.refine.internships)}}function J(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",25),s.TgZ(1,"div",26),s.NdJ("click",function(){s.CHM(i);var t=s.oxw(2);return t.isJobCategoryExpanded=!t.isJobCategoryExpanded}),s.TgZ(2,"span",27),s._uU(3,"Job Category"),s.qZA(),s.TgZ(4,"span",28),s._uU(5," expand_more"),s.qZA(),s.qZA(),s.YNc(6,A,9,2,"div",37),s.qZA()}if(2&t){var n=s.oxw(2);s.xp6(4),s.Q6J("ngClass",!0===n.isJobCategoryExpanded?"rotate-right":"rotate-left"),s.xp6(2),s.Q6J("ngIf",n.isJobCategoryExpanded)}}function q(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",34),s.TgZ(1,"mat-slide-toggle",41),s.NdJ("ngModelChange",function(t){return s.CHM(i),s.oxw(3).refine.remote=t}),s.qZA(),s.qZA()}if(2&t){var n=s.oxw(3);s.xp6(1),s.Q6J("ngModel",n.refine.remote)}}function j(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",25),s.TgZ(1,"div",26),s.NdJ("click",function(){s.CHM(i);var t=s.oxw(2);return t.isRemoteExpanded=!t.isRemoteExpanded}),s.TgZ(2,"span",27),s._uU(3,"Remote"),s.qZA(),s.TgZ(4,"span",28),s._uU(5,"expand_more"),s.qZA(),s.qZA(),s.YNc(6,q,2,1,"div",33),s.qZA()}if(2&t){var n=s.oxw(2);s.xp6(4),s.Q6J("ngClass",!0===n.isRemoteExpanded?"rotate-right":"rotate-left"),s.xp6(2),s.Q6J("ngIf",n.isRemoteExpanded)}}function k(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div"),s.TgZ(1,"section",46),s.TgZ(2,"mat-checkbox",47),s.NdJ("change",function(t){var e=s.CHM(i).$implicit;return s.oxw(4).updateLocation(t,e)}),s._uU(3),s.qZA(),s.qZA(),s.qZA()}if(2&t){var n=e.$implicit,o=s.oxw(4);s.xp6(2),s.Q6J("checked",o.checkLocation(n)),s.xp6(1),s.hij(" ",n," ")}}function I(t,e){if(1&t&&(s.TgZ(0,"div",44),s.YNc(1,k,4,2,"div",45),s.qZA()),2&t){var i=s.oxw(3);s.xp6(1),s.Q6J("ngForOf",i.allLocations)}}function P(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",25),s.TgZ(1,"div",26),s.NdJ("click",function(){s.CHM(i);var t=s.oxw(2);return t.isLocationExpanded=!t.isLocationExpanded}),s.TgZ(2,"span",27),s._uU(3,"Location"),s.qZA(),s.TgZ(4,"span",28),s._uU(5,"expand_more"),s.qZA(),s.qZA(),s.YNc(6,I,2,1,"div",43),s.qZA()}if(2&t){var n=s.oxw(2);s.xp6(4),s.Q6J("ngClass",!0===n.isLocationExpanded?"rotate-right":"rotate-left"),s.xp6(2),s.Q6J("ngIf",n.isLocationExpanded)}}function _(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"button",48),s.NdJ("click",function(){return s.CHM(i),s.oxw(2).refineJobs()}),s._uU(1,"Refine Jobs"),s.qZA()}}function C(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"button",49),s.NdJ("click",function(){return s.CHM(i),s.oxw(2).clearFilter()}),s._uU(1,"Clear Filter"),s.qZA()}}function E(t,e){1&t&&s._UZ(0,"app-not-found",50)}function N(t,e){if(1&t&&s._UZ(0,"img",80),2&t){var i=s.oxw().$implicit;s.s9C("src",i.jobPost.companyLogo,s.LSH)}}function U(t,e){if(1&t&&(s.TgZ(0,"div",67),s.TgZ(1,"span",81),s._uU(2,"location_on"),s.qZA(),s.TgZ(3,"span",82),s._uU(4),s.qZA(),s.qZA()),2&t){var i=s.oxw().$implicit;s.xp6(4),s.hij("\xa0",i.jobPost.location,"")}}function S(t,e){1&t&&(s.TgZ(0,"div",67),s.TgZ(1,"span",81),s._uU(2,"home"),s.qZA(),s.TgZ(3,"span",83),s._uU(4,"Work from home"),s.qZA(),s.qZA())}function M(t,e){1&t&&(s.TgZ(0,"div",84),s.TgZ(1,"div",85),s._uU(2,"Applied"),s.qZA(),s.qZA())}function O(t,e){if(1&t&&(s.TgZ(0,"div",87),s._uU(1),s.qZA()),2&t){var i=s.oxw(2).$implicit;s.xp6(1),s.hij(" ",i.jobPost.skills[1].skillName," ")}}function D(t,e){if(1&t&&(s.TgZ(0,"div",86),s.TgZ(1,"div",87),s._uU(2),s.qZA(),s.YNc(3,O,2,1,"div",88),s.qZA()),2&t){var i=s.oxw().$implicit;s.xp6(2),s.hij(" ",i.jobPost.skills[0].skillName," "),s.xp6(1),s.Q6J("ngIf",i.jobPost.skills.length>1)}}function Q(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",51),s.NdJ("click",function(){var t=s.CHM(i).$implicit;return s.oxw(2).seeDetails(t)}),s.TgZ(1,"div",52),s.TgZ(2,"div",53),s.TgZ(3,"div",54),s.TgZ(4,"div",55),s.TgZ(5,"span"),s.YNc(6,N,1,1,"img",56),s.qZA(),s.qZA(),s.TgZ(7,"div",57),s.TgZ(8,"h4"),s._uU(9),s.qZA(),s.TgZ(10,"div",58),s.TgZ(11,"div",59),s.TgZ(12,"div",60),s.TgZ(13,"span",61),s._uU(14,"work"),s.qZA(),s.TgZ(15,"span",62),s._uU(16,"Experience : "),s.qZA(),s.TgZ(17,"span",63),s._uU(18),s.qZA(),s.qZA(),s.TgZ(19,"div",60),s.TgZ(20,"span",64),s._uU(21,"business"),s.qZA(),s.TgZ(22,"span",62),s._uU(23,"Company : "),s.qZA(),s.TgZ(24,"span",63),s._uU(25),s.qZA(),s.qZA(),s.qZA(),s.TgZ(26,"div",65),s.YNc(27,U,5,1,"div",66),s.YNc(28,S,5,0,"div",66),s.TgZ(29,"div",67),s.TgZ(30,"span",68),s._uU(31," schedule "),s.qZA(),s.TgZ(32,"span",69),s._uU(33),s.ALo(34,"date"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.YNc(35,M,3,0,"div",70),s.qZA(),s.TgZ(36,"div",71),s.YNc(37,D,4,2,"div",72),s.TgZ(38,"div",73),s.TgZ(39,"div",74),s.TgZ(40,"div",75),s._uU(41),s.qZA(),s.qZA(),s.TgZ(42,"div",76),s.TgZ(43,"span",77),s._uU(44),s.qZA(),s.TgZ(45,"div",78),s.TgZ(46,"span",79),s._uU(47),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){var n=e.$implicit;s.xp6(6),s.Q6J("ngIf",n.jobPost.companyLogo),s.xp6(3),s.Oqu(n.jobPost.title),s.xp6(9),s.hij("\xa0",n.jobPost?n.jobPost.experience:""," years"),s.xp6(7),s.hij("\xa0",n.jobPost.companyName,""),s.xp6(2),s.Q6J("ngIf","In office"===n.jobPost.jobType),s.xp6(1),s.Q6J("ngIf","In office"!==n.jobPost.jobType),s.xp6(5),s.hij("Published on\xa0",s.xi3(34,12,n.jobPost.createdAt,"dd MMMM yyyy"),""),s.xp6(2),s.Q6J("ngIf",n.isApplied),s.xp6(2),s.Q6J("ngIf",n.jobPost.skills.length>0),s.xp6(4),s.hij("REWARD : \u20b9",n.referReward,""),s.xp6(3),s.hij("\xa0 \u20b9 ",n.jobPost.salary,""),s.xp6(3),s.Oqu(n.jobPost.salaryType)}}function F(t,e){if(1&t){var i=s.EpF();s.TgZ(0,"div",2),s.TgZ(1,"div",3),s.TgZ(2,"div",4),s.TgZ(3,"div",5),s.TgZ(4,"h5",6),s._uU(5),s.qZA(),s.qZA(),s.qZA(),s.TgZ(6,"div",7),s.TgZ(7,"div",8),s.TgZ(8,"div",9),s.TgZ(9,"input",10),s.NdJ("input",function(){return s.CHM(i),s.oxw().filterJobPosts()}),s.qZA(),s.qZA(),s.TgZ(10,"button",11),s.NdJ("click",function(){return s.CHM(i),s.oxw().filterJobPosts()}),s._uU(11,"Search "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(12,"div",12),s.TgZ(13,"div",13),s.TgZ(14,"div",14),s.TgZ(15,"div",15),s.NdJ("click",function(){return s.CHM(i),s.oxw().openRefineJobs()}),s._uU(16," Refine Jobs "),s.YNc(17,b,2,0,"span",16),s.qZA(),s.YNc(18,x,7,2,"div",17),s.YNc(19,y,7,2,"div",17),s.YNc(20,T,7,2,"div",17),s.YNc(21,J,7,2,"div",17),s.YNc(22,j,7,2,"div",17),s.YNc(23,P,7,2,"div",17),s.TgZ(24,"div",18),s.YNc(25,_,2,0,"button",19),s.YNc(26,C,2,0,"button",20),s.qZA(),s.qZA(),s.TgZ(27,"div",21),s.YNc(28,E,1,0,"app-not-found",22),s.YNc(29,Q,48,15,"div",23),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){var n=s.oxw();s.xp6(5),s.hij("Showing ",n.filteredJobPosts.length," Jobs"),s.xp6(4),s.Q6J("formControl",n.myControl),s.xp6(8),s.Q6J("ngIf",!n.isScreenBig),s.xp6(1),s.Q6J("ngIf",n.refineJobsDropDown),s.xp6(1),s.Q6J("ngIf",n.refineJobsDropDown),s.xp6(1),s.Q6J("ngIf",n.refineJobsDropDown),s.xp6(1),s.Q6J("ngIf",n.refineJobsDropDown),s.xp6(1),s.Q6J("ngIf",n.refineJobsDropDown),s.xp6(1),s.Q6J("ngIf",n.refineJobsDropDown),s.xp6(2),s.Q6J("ngIf",n.isChanged()),s.xp6(1),s.Q6J("ngIf",n.isFilterAdded()),s.xp6(2),s.Q6J("ngIf",0===n.filteredJobPosts.length),s.xp6(1),s.Q6J("ngForOf",n.filteredJobPosts)}}function Y(t,e){1&t&&s._UZ(0,"app-spinner-component")}var L,H=((L=function(){function e(t,n,o){i(this,e),this.jobPostService=t,this.router=n,this.authService=o,this.role=JSON.parse(window.atob(window.localStorage.getItem("id"))).role,this.allJobPost=[],this.filteredJobPosts=[],this.myControl=new a.NI,this.options=["Delivery boy","Software engineer","UI designer"],this.isSortByExpanded=!1,this.isLocationExpanded=!1,this.isPartTimeExpanded=!1,this.isJobCategoryExpanded=!1,this.isRemoteExpanded=!1,this.isExperienceExpanded=!1,this.allLocations=new Set,this.selectedLocations=new Set,this.selectedLocationsArray=[],this.isRelevent=!1,this.isServiceRunning=!1,this.isSortBy=!1,this.isScreenBig=!1,this.refineInitial={partTime:!1,fullTime:!1,jobs:!1,internships:!1,remote:!1,minExp:0,location:[]},this.refineDefaultInitial={partTime:!1,fullTime:!1,jobs:!1,internships:!1,remote:!1,minExp:0,location:[]},this.refine={partTime:!1,fullTime:!1,jobs:!1,internships:!1,remote:!1,minExp:0,location:[]},this.refineJobsDropDown=!1,this.allMyApplications=[],this.user=JSON.parse(window.atob(window.localStorage.getItem("id")))}return o(e,[{key:"isChanged",value:function(){return JSON.stringify(this.refine)!==JSON.stringify(this.refineInitial)}},{key:"isFilterAdded",value:function(){return JSON.stringify(this.refine)!==JSON.stringify(this.refineDefaultInitial)}},{key:"closeSortBy",value:function(t){this.isSortBy=t,this.isSortByExpanded=!1}},{key:"openRefineJobs",value:function(){this.isScreenBig||(this.refineJobsDropDown=!this.refineJobsDropDown)}},{key:"getMyApplication",value:function(){var t=this;this.authService.find({collection:"applyJob",query:{candidateId:this.user._id},selectedFields:{jobPostId:1,_id:0}}).subscribe(function(e){e.data&&(t.allMyApplications=e.data,t.checkJobPosts())})}},{key:"checkJobPosts",value:function(){var t=this;this.allJobPost.forEach(function(e){t.allMyApplications.find(function(t){return t.jobPostId===e._id})&&(e.isApplied=!0)})}},{key:"clearFilter",value:function(){this.refineInitial.partTime=this.refineDefaultInitial.partTime,this.refineInitial.fullTime=this.refineDefaultInitial.fullTime,this.refineInitial.jobs=this.refineDefaultInitial.jobs,this.refineInitial.internships=this.refineDefaultInitial.internships,this.refineInitial.remote=this.refineDefaultInitial.remote,this.refineInitial.minExp=this.refineDefaultInitial.minExp,this.refineInitial.location=this.refineDefaultInitial.location,this.refine.partTime=this.refineDefaultInitial.partTime,this.refine.fullTime=this.refineDefaultInitial.fullTime,this.refine.jobs=this.refineDefaultInitial.jobs,this.refine.internships=this.refineDefaultInitial.internships,this.refine.remote=this.refineDefaultInitial.remote,this.refine.minExp=this.refineDefaultInitial.minExp,this.refine.location=this.refineDefaultInitial.location,this.selectedLocations.clear(),this.refineJobs(),this.isSortByExpanded=!1,this.isLocationExpanded=!1,this.isPartTimeExpanded=!1,this.isJobCategoryExpanded=!1,this.isRemoteExpanded=!1,this.isExperienceExpanded=!1}},{key:"ngOnInit",value:function(){var t=this;window.screen.width>1150&&(this.isScreenBig=!0,this.refineJobsDropDown=!0),this.isServiceRunning=!0,this.authService.find({collection:"jobposts",query:{"jobPost.verified":!0}}).subscribe(function(e){e.data.length>0&&(t.filteredJobPosts=e.data,t.allJobPost=e.data,t.getMyApplication(),t.sortByDate(),t.isServiceRunning=!1)}),this.authService.find({collection:"jobposts",query:{"jobPost.verified":!0},selectedFields:{"jobPost.location":1,_id:0}}).subscribe(function(e){e.data.length>0&&e.data.forEach(function(e){t.allLocations.add(e.jobPost.location)})})}},{key:"seeDetails",value:function(t){2===this.role?this.router.navigateByUrl("/referer/jobs/job-detail/".concat(t._id)):0===this.role?this.router.navigateByUrl("/admin/jobs/detail/".concat(t._id)):1===this.role&&this.router.navigateByUrl("/recruiter/job-posts/detail/".concat(t._id))}},{key:"_filter",value:function(t){var e=t.toLowerCase();return this.options.filter(function(t){return 0===t.toLowerCase().indexOf(e)})}},{key:"filterJobPosts",value:function(){var e=this,i=this.myControl.value;i=i?i.toLowerCase():"",this.filteredJobPosts=[],this.allJobPost.forEach(function(n,o){if(n.jobPost.title.toLowerCase().includes(i)&&e.filteredJobPosts.push(JSON.stringify(n)),n.jobPost.skills.forEach(function(t){t.skillName.toLowerCase().includes(i)&&e.filteredJobPosts.push(JSON.stringify(n))}),e.allJobPost.length===o+1){var r=t(new Set(e.filteredJobPosts));e.filteredJobPosts=[],r.forEach(function(t){e.filteredJobPosts.push(JSON.parse(t))})}})}},{key:"sortByDate",value:function(){this.filteredJobPosts.sort(function(t,e){var i=new Date(t.jobPost.createdAt);return new Date(e.jobPost.createdAt)-i})}},{key:"getExperience",value:function(t){return"".concat(t)}},{key:"getStartDate",value:function(t){var e=new Date,i=new Date(t),n=Math.abs(i-e);return Math.ceil(n/864e5)>=7}},{key:"updateLocation",value:function(e,i){!0===e.checked?this.selectedLocations.add(i):this.selectedLocations.delete(i),this.refine.location=t(this.selectedLocations)}},{key:"checkLocation",value:function(t){return this.selectedLocations.has(t)}},{key:"refineJobs",value:function(){var e=this;this.isServiceRunning=!0;var i={collection:"jobposts",query:{"jobPost.verified":!0}};this.refine.partTime&&this.refine.fullTime||(this.refine.partTime?i.query["jobPost.partTime"]=this.refine.partTime:this.refine.fullTime&&(i.query["jobPost.partTime"]=!1)),this.refine.jobs&&this.refine.internships||(this.refine.jobs?i.query["jobPost.jobInternship"]="Job":this.refine.internships&&(i.query["jobPost.jobInternship"]="Internship")),this.refine.remote&&(i.query["jobPost.jobType"]=this.refine.remote?"Work from home":"In office"),this.selectedLocations.size>0&&(i.query["jobPost.location"]={$in:t(this.selectedLocations)}),this.refine.minExp>0&&(i.query["jobPost.experience"]={$gt:this.refine.minExp?this.refine.minExp-1:0}),this.authService.find(i).subscribe(function(t){t.data&&(e.filteredJobPosts=t.data,e.allJobPost=t.data,e.checkJobPosts(),e.refineInitial.partTime=e.refine.partTime,e.refineInitial.fullTime=e.refine.fullTime,e.refineInitial.jobs=e.refine.jobs,e.refineInitial.internships=e.refine.internships,e.refineInitial.remote=e.refine.remote,e.refineInitial.minExp=e.refine.minExp,e.refineInitial.location=e.refine.location,e.isScreenBig||(e.refineJobsDropDown=!1),e.filterJobPosts(),e.sortByDate(),e.isServiceRunning=!1)})}}]),e}()).\u0275fac=function(t){return new(t||L)(s.Y36(l.S),s.Y36(c.F0),s.Y36(d.e))},L.\u0275cmp=s.Xpm({type:L,selectors:[["app-all-job-posts"]],decls:2,vars:2,consts:[["class","w-100 h-100 m-0 p-0","style","overflow: auto; border-radius: 7px; background-color: #f8f8f8",4,"ngIf"],[4,"ngIf"],[1,"w-100","h-100","m-0","p-0",2,"overflow","auto","border-radius","7px","background-color","#f8f8f8"],[1,"row","col-sm-10","justify-content-center","px-0","pt-2","mx-auto"],[1,"col-sm-3","d-flex","justify-content-center"],[1,"m-2","d-flex","justify-content-center","vertical-center"],[1,"text-bold","p-3"],[1,"col-sm-9","justify-content-center"],[1,"row","col-sm-12","justify-content-center","vertical-center","shadow","bg-white","p-2","border-6","mx-auto"],[1,"col-sm-10","vertical-center","justify-content-center"],["type","text","placeholder","Search by skills or job title",1,"no-border","bg-white","text-black",2,"width","95%",3,"formControl","input"],[1,"col-sm-2","btn","btn-primary","px-2","py-1","border-6",3,"click"],[1,"row","col-sm-12","justify-content","center","px-0","bg-lightest-blue","mx-0"],[1,"row","col-sm-10","justify-content-center","px-0","pt-2","mx-auto","mt-4"],[1,"col-sm-3","mt-2"],[1,"border-12","m-2","mr-2","w-100","bg-white","overlay","text-dark","p-3","semi-bold","text-ssmd","vertical-center","justify-content-between",3,"click"],["class","material-icons",4,"ngIf"],["class","border-12 text-link m-2 mr-2 w-100 bg-white overlay p-3",4,"ngIf"],[1,"row","col-sm-12","justify-content-center","mx-auto"],["class","overlay btn btn-primary mx-auto text-smd","style","border-radius: 30px; bottom: 0",3,"click",4,"ngIf"],["class","overlay btn btn-primary text-smd","style","border-radius: 30px; bottom: 0",3,"click",4,"ngIf"],[1,"col-sm-9","mx-0","mt-2","p-0"],["message","We couldn't find any results. Change selected filters or try later.","style","margin-top: 6rem !important;","class","center-parent",4,"ngIf"],["class","m-2 mr-2 mb-3 ",3,"click",4,"ngFor","ngForOf"],[1,"material-icons"],[1,"border-12","text-link","m-2","mr-2","w-100","bg-white","overlay","p-3"],[1,"vertical-center","justify-content-between",3,"click"],[1,"text-ssmd"],[1,"material-icons","text-grey","text-md","bold",3,"ngClass"],["class","my-2 row vertical-center justify-content-center",4,"ngIf"],[1,"my-2","row","vertical-center","justify-content-center"],[1,"m-2"],[1,"px-3","py-1",2,"border-radius","20px",3,"ngClass","click"],["class","my-2",4,"ngIf"],[1,"my-2"],[1,"text-sm","text-grey"],["thumbLabel","","displayWith","","tickInterval","1","min","0","max","10",1,"w-100",3,"ngModel","ngModelChange"],["class","my-2 p-2",4,"ngIf"],[1,"my-2","p-2"],[1,"mb-3","vertical-center"],[1,"text-sm","semi-bold","text-grey","mr-2"],[3,"ngModel","ngModelChange"],[1,"mb-2","vertical-center"],["class","px-3 pt-3 pb-1",4,"ngIf"],[1,"px-3","pt-3","pb-1"],[4,"ngFor","ngForOf"],[1,"example-section"],[1,"example-margin","text-uppercase",3,"checked","change"],[1,"overlay","btn","btn-primary","mx-auto","text-smd",2,"border-radius","30px","bottom","0",3,"click"],[1,"overlay","btn","btn-primary","text-smd",2,"border-radius","30px","bottom","0",3,"click"],["message","We couldn't find any results. Change selected filters or try later.",1,"center-parent",2,"margin-top","6rem !important"],[1,"m-2","mr-2","mb-3",3,"click"],[1,"card","border-4","shadow-lg","p-3","text-link","border-8"],[1,"d-flex","mb-3","justify-content-between"],[1,"d-flex","flex-wrap"],[1,"mr-3","mb-2"],["class","border-6","style","height: 60px; width: 58.2px;",3,"src",4,"ngIf"],[1,"text-left"],[1,"column"],[1,"d-flex","vertical-center","flex-wrap"],[1,"vertical-center","justify-content-start","mr-3"],[1,"material-icons-outlined","mr-2","text-primary"],[1,"text-lato","text-primary","d-inline"],[1,"text-lato","text-primary"],[1,"material-icons","mr-2","text-primary"],[1,"d-flex","flex-wrap","mt-1"],["class"," vertical-center justify-content-start mr-2",4,"ngIf"],[1,"vertical-center","justify-content-start","mr-2"],[1,"material-icons","text-md","mr-2","text-primary"],[1,"text-smd","text-lato","text-primary"],["class"," d-flex align-items-start justify-content-center",4,"ngIf"],[1,"d-flex","justify-content-between","flex-wrap","vertical-center"],["class","my-2 d-flex vertical-center flex-wrap",4,"ngIf"],[1,"d-flex","vertical-center","flex-wrap","justify-content-between"],[1,"justify-content-between","vertical-center","mr-2"],[1,"btn","btn-primary","px-2","py-1","mr-2","border-6","text-white","text-lato","text-sm"],[1,"my-2","vertical-center","justify-content-start"],[1,"text-black","text-slmd"],[1,"d-flex","ml-1","align-self-end"],[1,"text-fluid"],[1,"border-6",2,"height","60px","width","58.2px",3,"src"],[1,"material-icons-outlined","text-md","mr-2","text-primary"],[1,"text-lato","text-smd","text-primary"],[1,"text-lato","text-smd","text-primary","d-inline"],[1,"d-flex","align-items-start","justify-content-center"],[1,"p-2","bg-light","border-12"],[1,"my-2","d-flex","vertical-center","flex-wrap"],[1,"px-2","py-1","text-primary","bg-lightest-blue","mr-2","border-6","text-lato","text-sm"],["class","px-2 py-1 text-primary bg-lightest-blue mr-2 border-6 text-lato text-sm",4,"ngIf"]],template:function(t,e){1&t&&(s.YNc(0,F,30,13,"div",0),s.YNc(1,Y,1,0,"app-spinner-component",1)),2&t&&(s.Q6J("ngIf",!e.isServiceRunning),s.xp6(1),s.Q6J("ngIf",e.isServiceRunning))},directives:[f.O5,a.Fj,a.JJ,a.oH,f.sg,f.mk,p.pH,a.On,u.Rr,g.oG,m.w,h.H],pipes:[f.uU],styles:[".sort-by-selected[_ngcontent-%COMP%]{border:1px solid #4b4b4b;color:#fff;background-color:#0e2043}.sort-by-not-selected[_ngcontent-%COMP%]{border:1px solid #4b4b4b;color:#0e2043;background-color:#e1e7ff}  .mat-step-header .mat-step-icon-selected, .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-done[_ngcontent-%COMP%], .mat-step-header[_ngcontent-%COMP%]   .mat-step-icon-state-edit[_ngcontent-%COMP%]{background-color:red!important}  .mat-form-field-appearance-outline .mat-form-field-outline{color:#fff!important}  .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#fff!important}  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:red!important;opacity:.8!important}  .mat-input-element{caret-color:#fff!important}  .mat-form-field-invalid .mat-input-element, .mat-warn[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:red!important}  .mat-form-field-label{color:#fff9!important}  .mat-form-field.mat-focused .mat-form-field-label{color:#fff!important}  .mat-form-field .mat-form-field-invalid .mat-form-field-label{color:#fff!important}[_ngcontent-%COMP%]::-moz-placeholder{color:#a0a0a0;opacity:1}[_ngcontent-%COMP%]::placeholder{color:#a0a0a0;opacity:1}"]}),L)},47499:function(t,e,n){n.d(e,{C:function(){return g}});var r=n(37716),a=n(63301),s=n(56983),l=n(70453),c=n(38583),d=n(92859);function f(t,e){if(1&t){var i=r.EpF();r.TgZ(0,"li",15),r.TgZ(1,"a",16),r.NdJ("click",function(){var t=r.CHM(i).$implicit;return r.oxw().navigate(t.route)}),r._uU(2),r.qZA(),r.qZA()}if(2&t){var n=e.$implicit,o=r.oxw();r.xp6(1),r.Q6J("ngClass",o.url.includes(n.route)?"active-url":""),r.xp6(1),r.hij(" ",n.name,"")}}function p(t,e){if(1&t){var i=r.EpF();r.TgZ(0,"div",17),r._uU(1," Are you sure you want to logout? "),r.TgZ(2,"div",18),r.TgZ(3,"button",19),r.NdJ("click",function(){return r.CHM(i),r.oxw().loggedOut()}),r._uU(4,"Yes"),r.qZA(),r.TgZ(5,"button",20),r.NdJ("click",function(){return r.CHM(i),r.oxw().cancel()}),r._uU(6,"No"),r.qZA(),r.qZA(),r.qZA()}}var u,g=((u=function(){function t(e,n,o){i(this,t),this.modalRef=e,this.modalService=n,this.router=o,this.navItems=[],this.url="",this.isCollapsed=!0}return o(t,[{key:"navigate",value:function(t){this.isCollapsed=!0,this.router.navigateByUrl(t)}},{key:"ngOnInit",value:function(){this.url=this.router.url}},{key:"openModal",value:function(t){this.modalRef=this.modalService.show(t,{class:"half-modal",ignoreBackdropClick:!0,animated:!0})}},{key:"cancel",value:function(){this.modalRef.hide()}},{key:"loggedOut",value:function(){this.modalRef.hide(),window.localStorage.removeItem("id"),window.open("https://refer2career.com/login","_self")}}]),t}()).\u0275fac=function(t){return new(t||u)(r.Y36(a.UZ),r.Y36(a.tT),r.Y36(s.F0))},u.\u0275cmp=r.Xpm({type:u,selectors:[["app-nav-bar-content"]],inputs:{navItems:"navItems"},decls:19,vars:3,consts:[[1,"row","shadow","justify-content-center","p-0","m-0"],[1,"col-sm-12","shadow"],[1,"navbar","navbar-expand-lg","col-sm-11","navbar-light","bg-light","w-100"],[1,"nav-link","mr-1"],["src","../../../../assets/refer2carrierlogo.png","alt","",1,"logo-header"],["type","button","aria-expanded","false",1,"navbar-toggler","collapsed",3,"click"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"ml-3","collapse","navbar-collapse","vertical-center","justify-content-between",3,"collapse","isAnimated"],[1,"navbar-nav"],["class","nav-item mr-4",4,"ngFor","ngForOf"],[3,"click"],[1,"btn","btn-primary"],[1,"vertical-center"],["name","lock-closed",1,"mr-1"],["logout",""],[1,"nav-item","mr-4"],[1,"nav-link","text-dark","myfont-size","text-link","active-button","pl-3","pr-3",3,"ngClass","click"],[1,"bg-white","box-shadow","text-lato","p-3","m-3",2,"border-radius","10px"],[1,"d-flex","justify-content-end","px-2","mt-2"],[1,"btn","btn-secondary","p-0","text-smd","px-2","mr-3",3,"click"],[1,"btn","btn-primary","text-smd","px-2","p-0",3,"click"]],template:function(t,e){if(1&t){var i=r.EpF();r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"nav",2),r.TgZ(3,"a",3),r._UZ(4,"img",4),r.qZA(),r.TgZ(5,"button",5),r.NdJ("click",function(){return e.isCollapsed=!e.isCollapsed}),r._UZ(6,"span",6),r.qZA(),r.TgZ(7,"div",7),r.TgZ(8,"ul",8),r.YNc(9,f,3,2,"li",9),r.qZA(),r.TgZ(10,"ul",8),r.TgZ(11,"li"),r.TgZ(12,"a",10),r.NdJ("click",function(){r.CHM(i);var t=r.MAs(18);return e.openModal(t)}),r.TgZ(13,"button",11),r.TgZ(14,"span",12),r._UZ(15,"ion-icon",13),r._uU(16,"LOGOUT "),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.YNc(17,p,7,0,"ng-template",null,14,r.W1O)}2&t&&(r.xp6(7),r.Q6J("collapse",e.isCollapsed)("isAnimated",!0),r.xp6(2),r.Q6J("ngForOf",e.navItems))},directives:[l.Y,c.sg,d.gu,c.mk],styles:[".logo-header[_ngcontent-%COMP%]{height:auto;width:auto;max-width:180px!important}.active-button[_ngcontent-%COMP%]:hover{background-color:#0e2043;color:#fff!important;border-radius:6px}.active-url[_ngcontent-%COMP%]{background-color:#0e2043;color:#fff!important;border-radius:6px}.conatiner[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}"]}),u)},59442:function(t,e,n){n.d(e,{w:function(){return l}});var r=n(37716),a=n(38583);function s(t,e){if(1&t&&(r.TgZ(0,"div",1),r.TgZ(1,"div",2),r._UZ(2,"img",3),r.TgZ(3,"span",4),r._uU(4),r.qZA(),r.TgZ(5,"small",5),r._uU(6),r.qZA(),r.qZA(),r.qZA()),2&t){var i=r.oxw();r.xp6(4),r.Oqu(i.title),r.xp6(2),r.Oqu(i.message)}}var l=function(){var t=function(){function t(){i(this,t),this.title="Sorry!",this.message="Visit after Sometime",this.visibility=!0,this.isError=!1}return o(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-not-found"]],inputs:{title:"title",message:"message",visibility:"visibility",isError:"isError"},decls:1,vars:1,consts:[["class","w-100 vertical-center",4,"ngIf"],[1,"w-100","vertical-center"],[1,"flex-column","d-flex","align-items-center","vertical-center","w-100"],["src","../../../../assets/not-found-search.png",1,"img-login"],[1,"text-semibold","text-md"],[1,"text-smd","text-semibold","text-center",2,"width","75%"]],template:function(t,e){1&t&&r.YNc(0,s,7,2,"div",0),2&t&&r.Q6J("ngIf",e.visibility)},directives:[a.O5],styles:[""]}),t}()},20639:function(t,e,n){n.d(e,{H:function(){return d}});var r=n(37716),a=n(38583),s=n(4885);function l(t,e){if(1&t&&(r.TgZ(0,"div",1),r.TgZ(1,"div",2),r._UZ(2,"mat-spinner",3),r.qZA(),r.qZA()),2&t){var i=r.oxw();r.xp6(2),r.Q6J("diameter",35)("color",i.color)}}var c,d=((c=function(){function t(){i(this,t),this.visibility=!0,this.color="accent"}return o(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=r.Xpm({type:c,selectors:[["app-spinner-component"]],inputs:{visibility:"visibility"},decls:1,vars:1,consts:[["class","fixed-top fixed-bottom wh-100 vh-100 fixed-top vertical-center justify-content-center","style","background-color: rgba(49, 49, 49, 0.5) !important;",4,"ngIf"],[1,"fixed-top","fixed-bottom","wh-100","vh-100","fixed-top","vertical-center","justify-content-center",2,"background-color","rgba(49, 49, 49, 0.5) !important"],[1,"border","border-light","bg-white","rounded-circle","p-2"],[3,"diameter","color"]],template:function(t,e){1&t&&r.YNc(0,l,3,2,"div",0),2&t&&r.Q6J("ngIf",e.visibility)},directives:[a.O5,s.$g],styles:[""]}),c)},50986:function(t,e,n){n.d(e,{S:function(){return l}});var r=n(79765),a=n(91841),s=n(37716),l=function(){var t=function(){function t(e){i(this,t),this.http=e,this.headers=new a.WM({"content-type":"application/json"}),this.baseUrl="",this.post=void 0,this.jobPosts=new r.xQ,this.postDetail={},this.myApplications=new r.xQ,this.baseUrl=window.location.host.includes("localhost")?"http://localhost:8084":"",this.getPosts()}return o(t,[{key:"getMyApplications",value:function(){var t=this;this.appliedJobPost({candidateId:JSON.parse(window.atob(window.localStorage.getItem("id")))._id}).subscribe(function(e){e.data&&t.myApplications.next(e.data)})}},{key:"getPosts",value:function(){var t=this;window.localStorage.getItem("id")&&(1===JSON.parse(window.atob(window.localStorage.getItem("id"))).role?this.getJobPostsByEmployer({_id:JSON.parse(window.atob(window.localStorage.getItem("id")))._id}).subscribe(function(e){t.jobPosts.next(e.data)}):this.getAllJobPosts().subscribe(function(e){t.jobPosts.next(e.data)}))}},{key:"addJobPost",value:function(t){var e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/add/jobpost",e,{headers:this.headers})}},{key:"updateJobPost",value:function(t){var e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/update/jobpost",e,{headers:this.headers})}},{key:"deleteJobPost",value:function(t){var e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/delete/jobpost",e,{headers:this.headers})}},{key:"getAllJobPosts",value:function(){return this.http.post(this.baseUrl+"/api/getAll/jobposts",{headers:this.headers})}},{key:"getJobPost",value:function(t){var e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/get/jobpost",e,{headers:this.headers})}},{key:"applyJobPost",value:function(t){var e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/apply/jobpost",e,{headers:this.headers})}},{key:"appliedJobPost",value:function(t){var e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/applied/jobposts",e,{headers:this.headers})}},{key:"getJobPostsByEmployer",value:function(t){var e=JSON.stringify(t);return this.http.post(this.baseUrl+"/api/employer/jobposts",e,{headers:this.headers})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(s.LFG(a.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}])}();