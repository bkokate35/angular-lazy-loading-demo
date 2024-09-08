import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class LazyComponent implements OnInit {
  messageFromQuery: string = '';
  messageFromService: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private communicationService: CommunicationService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.messageFromQuery = params['message'] || 'No message';
    });

    this.communicationService.currentMessage.subscribe(message => {
      this.messageFromService = message;
    });
  }

  goToDynamic() {
    this.router.navigate(['dynamic'], { relativeTo: this.route });
  }

  sendMessage() {
    this.communicationService.sendMessage('Message from main app');
  }
}