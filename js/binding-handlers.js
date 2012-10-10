﻿ko.bindingHandlers.jqmtext = {
    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var value = valueAccessor();
        var valueUnwrapped = ko.utils.unwrapObservable(value);
        $(element).find(".ui-btn-text").text(valueUnwrapped);
    }
};