import {Component, OnInit} from "@angular/core";
import {ObservableArray} from "data/observable-array";
import {DataItem} from "../dataItem";
import {DataItemService} from "../dataItem.service";

@Component({
    selector: "listview-getting-started",
    providers: [DataItemService],
    templateUrl: "listview/getting-started/listview-getting-started.component.html",
    styleUrls: ["listview/getting-started/listview-getting-started.component.css"]
})
// >> listview-getting-started-angular
export class ListViewGettingStartedComponent implements OnInit {
    private _dataItems: ObservableArray<DataItem>;

    constructor(private _dataItemService: DataItemService) {
    }

    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }

    ngOnInit() {
        this._dataItems = new ObservableArray(this._dataItemService.getDataItems());
    }
}
// << listview-getting-started-angular