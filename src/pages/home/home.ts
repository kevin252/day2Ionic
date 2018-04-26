import { PostsProvider } from './../../providers/posts/posts';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Post } from '../../interfaces/post.service';
import { PostDetailPage } from '../post-detail/post-detail';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	posts: Post[];
	constructor(public navCtrl: NavController, postService: PostsProvider) {
		postService.getPosts().subscribe((content) => {
			this.posts = content;
		});
	}

	showPostDetail(post: Post) {
		this.navCtrl.push('PostDetailPage', { post });
	}
}
