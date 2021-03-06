import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatPage } from '../pages/chat/chat';
import { ArchangelChatPage } from '../pages/archangel/chat/chat';
import { ArchangelMissionsPage } from '../pages/archangel/missions/missions';
import { LoginPage } from '../pages/login/login'
import { ProfilePage } from '../pages/profile/profile';
import { ProfileEditPage } from '../pages/profile/edit/edit';
import { CalendarPublicEventPage } from '../pages/calendar-public-event/calendar-public-event';

// COMPONENTS / PIPES / DIRECTIVES
import { DateCustomPipe } from '../pipes/date-custom-pipe';
import { TruncatePipe } from '../pipes/truncate-pipe';

// PROVIDERS
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/database/auth-service';
import { Storage } from '@ionic/storage';
import { UserStorageService } from '../providers/database/user-storage-service';
import { CalendarStorageService } from '../providers/database/calendar-storage-service';
import { ChatStorageService } from '../providers/database/chat-storage-service';
import { DateUtil } from '../providers/util/date-util';
import { Utils } from '../providers/util/utils';

export const firebaseConfig = {
   apiKey: "AIzaSyAnTqOEZHBU-1CMx0fKY2v4zFeGvPnvA1I",
   authDomain: "superacao-dc62e.firebaseapp.com",
   databaseURL: "https://superacao-dc62e.firebaseio.com",
   storageBucket: "superacao-dc62e.appspot.com",
   messagingSenderId: "1018181753983"
};

@NgModule({
  declarations: [
    ArchangelChatPage,
    ArchangelMissionsPage,
    ChatPage,
    CalendarPublicEventPage,
    DateCustomPipe,
    TruncatePipe,
    LoginPage,
    MyApp,
    ProfilePage,
    TabsPage,
    ProfileEditPage,

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ArchangelChatPage,
    ArchangelMissionsPage,
    CalendarPublicEventPage,
    ChatPage,
    ProfilePage,
    ProfileEditPage,
    LoginPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    UserStorageService,
    CalendarStorageService,
    ChatStorageService,
    DateUtil,
    Storage,
    Utils
  ]
})

export class AppModule {}
