import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy, OnInit {


  public counter = signal(10);

  public user = signal<User>({
    id: 2,
    email: 'janet.weaver@reqres.in',
    first_name: 'Janet',
    last_name: 'Weaver',
    avatar: 'https://reqres.in/img/faces/2-image.jpg'
  });

  public fullName = computed( () => `${ this.user().first_name } ${ this.user().last_name }` );

  public userChangedEffects = effect( () => {
    console.log( `${ this.user().first_name } - ${ this.counter() }` );
  });

  ngOnInit(): void {
    setInterval( () => {
      this.counter.update( current =>  current + 1 );
      if ( this.counter() > 100) this.userChangedEffects.destroy();
    }, 0.0001)
  }

  ngOnDestroy(): void {
    // this.userChangedEffects.destroy();
  }

  increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }

  onFieldUpdated( field: keyof(User), value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // });

    this.user.update( currentUser => {
      return {
        ...currentUser,
        [field] : value
      }
    });

    // this.user.mutate( currentUser => {
    //   switch( field ) {
    //     case 'email':
    //       currentUser.email = value;
    //       break;
    //     case 'first_name':
    //       currentUser.first_name = value;
    //       break;
    //     case 'last_name':
    //       currentUser.last_name = value;
    //       break;
    //   }
    // });


  }
}
