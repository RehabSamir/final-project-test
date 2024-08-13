import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription , from, fromEvent, merge, of, take ,map } from 'rxjs';

@Component({
  selector: 'app-obs-oberators',
  standalone: true,
  imports: [],
  templateUrl: './obs-oberators.component.html',
  styleUrl: './obs-oberators.component.scss',
})
export class ObsOberatorsComponent implements OnInit, OnDestroy {
  sub!: Subscription; // non null assertion
 // next()
  obs = new Observable((obs)=>{
    setTimeout(() => {
      obs.next('AD1');
    }, 2000);
  setTimeout(() => {
    obs.error('error in observerable');
  }, 4000);
    setTimeout(() => {
      obs.next('AD3');
    }, 4500);
    setTimeout(() => {
      obs.complete();
    }, 6000);
  });
  ngOnInit() : void{
     this.sub= this.obs.subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
        complete:()=>{
          console.log("completed");
        }
      });


      // oberators
// =================== merge ===========
      var obs1 = new Observable((obser) => {
          console.log('Observable one');
        });
    
        var obs2 = new Observable((observ) => {
          console.log('Observable two');
        });
    
        var obs3 = merge(obs1, obs2);

        obs3.subscribe((data) => {
      console.log(data);
    });
// ============== of ================
    of(2,3,8,9,10).subscribe((data) => {
      console.log(data);

    })
// ============== from ================
    from([2,3,8,9,10,[66]]).subscribe((data) => {
      console.log(data);
    })
//================== map ================
    const numbers = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.sub = numbers.pipe(map((value) => value * 10) 
      )
      .subscribe((result) => {
        console.log('Map Operator:', result); 
      });

// ================== event ==============
    var obs=fromEvent(document,'click');
    obs.subscribe((data) => {
      console.log("you clicked document");

    })


    obs.pipe(take(2)).subscribe(() => {
      console.log("you clicked document");

    })
  }
// =============== ngOnDestroy function ==============
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
