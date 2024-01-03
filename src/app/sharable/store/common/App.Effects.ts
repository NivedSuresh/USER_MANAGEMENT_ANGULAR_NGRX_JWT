import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {MatSnackBar} from "@angular/material/snack-bar";
import {emptyAction, showAlert} from "./App.Action";
import {exhaustMap, map} from "rxjs";


@Injectable({
  providedIn : "root"
})
export class AppEffects{

  constructor(
    private action : Actions,
    private snackbar : MatSnackBar
  ) {}

  _showAlert = createEffect(() =>
    this.action.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
        return this.showSnackBarAlert(action.message, action.resultType).afterDismissed().pipe(
          map(() => {
            return emptyAction();
          })
        )
      })
    )
  )

  showSnackBarAlert(message :string, resultType :string =  'failure'){
    console.log("reached here")
    let _class :string = resultType !== 'failure' ? 'green-snack-bar' : 'red-snack-bar';
    return this.snackbar.open(message, 'OK', {
      verticalPosition: "top",
      horizontalPosition : "end",
      duration : 4000,
      panelClass : _class
    })
  }


}

