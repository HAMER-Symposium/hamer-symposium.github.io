ApplicationRouter = Backbone.Marionette.AppRouter.extend({
	routes: {
		"": "home",
		"home": "home",
		"program": "program",
		"transport": "transport",
		"photos": "photos",
		"registration": "registration",
		"submission": "submission"
	},

	deselectPills: function () {
		$('ul.sidebar li').removeClass('active');
	},

	selectPill: function (pill) {
		this.deselectPills();
		$(pill).addClass('active');
	},

	home: function () {
		this.selectPill('ul.sidebar li.home');
		MyApp.contentRegion.show(new ContentHomeView());
	},


	program: function () {
		this.selectPill('ul.sidebar li.program');
		MyApp.contentRegion.show(new ContentProgramView());
	},

	papers: function () {
		this.selectPill('ul.sidebar li.papers');
		MyApp.contentRegion.show(new ContentPapersView());
	},

	posters: function () {
		this.selectPill('ul.sidebar li.posters');
		MyApp.contentRegion.show(new ContentPostersView());
	},

	transport: function () {
		this.selectPill('ul.sidebar li.transport');
		MyApp.contentRegion.show(new ContentTransportView());
	},

	registration: function () {
		this.selectPill('ul.sidebar li.registration');
		MyApp.contentRegion.show(new ContentRegistrationView());
	},

	photos: function () {
		this.selectPill('ul.sidebar li.photos');
		MyApp.contentRegion.show(new ContentPhotosView());
	},

	submission: function () {
		this.selectPill('ul.sidebar li.submission');
		MyApp.contentRegion.show(new ContentSubmissionView());
	},

	
});
