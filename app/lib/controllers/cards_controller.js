CardsController = RouteController.extend({
  layoutTemplate: "MasterLayout",
  
  subscriptions: function() {
    this.subscribe("lists");
    this.subscribe("cards");
    this.subscribe("account_users");
  },
  
  edit: function () {
    card = Cards.findOne({_id: this.params._id});
    this.render('EditCard', {
      data: function(){
        return { card: card};
      }
    });
  }

});
