<div id="chat_head" class="chat_head">
	<div onclick="toggleLeft();" class="head_option">
		<i class="i_btm fa fa-bars"></i>
		<div id="bottom_news_notify" class="notification bnotify"></div>
	</div>
	<?php if($page['page_embed'] == 0){?>
	<div class="chat_head_logo">
		<img id="main_logo" alt="logo" src="<?php echo getLogo('logo'); ?>"/>
	</div>
	<?php } ?>
	<div id="empty_top_mob" class="bcell_mid hpad10">
	</div>
	<div title="<?php echo $lang['private_list']; ?>" value="0" onclick="getPrivate();" id="get_private" class="head_option">
		<i class="i_btm fa fa-envelope"></i>
		<div id="notify_private" class="notification bnotify"></div>
	</div>
	<?php if(boomAllow(1)){ ?>
	<div onclick="friendRequest();" class="head_option">
		<i class="fa fa-user-plus"></i>
		<div id="notify_friends" class="notification bnotify"></div>
	</div>
	<?php } ?>
	<div onclick="getNotification();" class="head_option">
		<i class="fa fa-bell"></i>
		<div id="notify_notify" class="notification bnotify"></div>
	</div>
	<?php if(boomAllow(8)){ ?>
	<div onclick="loadReport();" class="head_option">
		<i class="fa fa-flag"></i>
		<div id="report_notify" class="notification bnotify"></div>
	</div>
	<?php } ?>
	<div onclick="showMenu('mobile_main_menu');" id="main_mob_menu">
		<img class="avatar_menu glob_av" src="<?php echo myavatar($data['user_tumb']); ?>"/>
		<div id="mobile_main_menu" class="sysmenu hideall sub_menu">
			<div class="sub_menu_item" onclick="editProfile();">
				<div class="sub_menu_icon">
					<i class="fa fa-user-circle"></i>
				</div>
				<div class="sub_menu_text">
					<?php echo $lang['my_profile']; ?>
				</div>
			</div>
			<?php if(useLobby()){ ?>
			<div id="back_home" class="sub_menu_item">
				<div class="sub_menu_icon">
					<i class="fa fa-home"></i>
				</div>
				<div class="sub_menu_text">
					<?php echo $lang['lobby']; ?>
				</div>
			</div>
			<?php } ?>
			<div id="room_setting_menu" class="room_granted nogranted sub_menu_item" onclick="getRoomSetting();">
				<div class="sub_menu_icon">
					<i class="fa fa-cog"></i>
				</div>
				<div class="sub_menu_text">
					<?php echo $lang['room_side_settings']; ?>
				</div>
			</div>
			<?php if(boomAllow(8)){ ?>
			<div class="sub_menu_item" onclick="getActionBox();">
				<div class="sub_menu_icon">
					<i class="fa fa-legal"></i>
				</div>
				<div class="sub_menu_text">
					<?php echo $lang['manage_action']; ?>
				</div>
			</div>
			<?php } ?>
			<?php if(boomAllow(9)){ ?>
			<div class="sub_menu_item" onclick="openLinkPage('admin.php');">
				<div class="sub_menu_icon">
					<i class="fa fa-dashboard"></i>
				</div>
				<div class="sub_menu_text">
					<?php echo $lang['admin_panel']; ?>
				</div>
			</div>
			<?php } ?>
			<div id="open_logout" class="sub_menu_item" onclick="openLogout();">
				<div class="sub_menu_icon">
					<i class="fa fa-sign-out"></i>
				</div>
				<div class="sub_menu_text">
					<?php echo $lang['logout']; ?>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="global_chat" class="chatheight" >
	<div id="chat_left" class="cleft chat_panel pheight" >
		<div id="chat_left_menu" class="pheight">
			<div class="chat_left_menu_wrap">
				<div class="left_bar_ctn hidden">
					<div id="left_panel_bar" class="panel_bar">
						<div onclick="toggleLeft();" class="panel_bar_item">
							<i class="fa fa-times"></i>
						</div>
						<div class="bcell_mid">
						</div>
					</div>
				</div>
				<div id="status_menu" class="list_element">
					<div id="current_status" class="left_item cur_status">
						<?php echo listStatus($data['user_status']); ?>
					</div>
					<div id="status_list" class="hidden">
						<?php echo listAllStatus(); ?>
					</div>
				</div>
				<?php if(useWall() && boomAllow(1)){ ?>
				<div id="wall_menu" class="list_element left_item" onclick="getWall();">
					<div class="left_item_icon">
						<i class="fa fa-rss menui"></i>
					</div>
					<div class="left_item_text">
						<?php echo $lang['wall']; ?>
					</div>
				</div>
				<?php } ?>
				<div id="news_menu" class="list_element left_item" onclick="getNews();">
					<div class="left_item_icon">
						<i class="fa fa-newspaper-o menui"></i>
					</div>
					<div class="left_item_text">
						<?php echo $lang['system_news']; ?>
					</div>
					<div class="left_item_notify">
						<span id="news_notify" class="notif_left bnotify"></span>
					</div>
				</div>
				<div id="end_left_menu">
				</div>
				<div id="more_menu"class="list_element">
					<div id="open_more_menu" class="left_item" onclick="openMoreMenu();">
						<div class="left_item_icon">
							<i class="fa fa-plus-circle menui"></i>
						</div>
						<div class="left_item_text">
							<?php echo $lang['more']; ?>
						</div>
					</div>
					<div id="more_menu_list" class="hidden">
						<div id="chat_help_menu" class="left_drop_item more_left" onclick="showHelp();">
							<div class="left_item_icon">
								<i class="fa fa-life-ring"></i>
							</div>
							<div class="left_drop_text">
								<?php echo $lang['help']; ?>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container_extra">
				<!-- extra content for left panel do not exceed 250px width -->
			</div>
		</div>
	</div>
	<div id="chat_center" class="background_chat chatheight" style="position:relative;">
		<div  id="container_chat">
			<div id="wrap_chat">
				<div id="warp_show_chat">
					<div id="container_show_chat">
						<div id="inside_wrap_chat">
							<ul class="background_box" id="show_chat" value="1">
								<ul id="chat_logs_container">
								</ul>
							</ul>
						</div>
						<div value="0" id="main_emoticon" class="background_box">
							<div class="emo_head main_emo_head">
								<?php if(emoPlus()){ ?>
									<div data="base_emo" class="dark_selected emo_menu emo_menu_item"><img class="emo_select" src="emoticon_icon/base_emo.png"/></div>
									<?php echo emoItem(1); ?>
								<?php } ?>
								<div class="empty_emo">
								</div>
								<div class="emo_menu" onclick="hideEmoticon();">
									<i class="fa fa-times"></i>
								</div>
							</div>
							<div id="main_emo" class="emo_content">
								<?php listSmilies(1); ?>
							</div>
						</div>	
					</div>
						<!--
						<div id="special_space" style="width:100%; height:auto; position:absolute; top:0; left:0;">
							<img style="display:block; margin:0 auto; max-width:90%" src="<?php echo $data['domain'] . '/upload/banners/flywin.png'; ?>"/>
						</div>
						-->
					<div class="clear"></div>
				</div>
				<div class="chat_input_container">
					<div id="top_chat_container">
						<div id="container_input" class="input_wrap">
							<form id="main_input" name="chat_data" action="" method="post">
								<div class="input_table">
									<div id="ok_sub_item" class="input_item main_item base_main sub_hidden" onclick="getChatSub();">
										<i class="fa fa-plus input_icon bblock"></i>
									</div>
									<div value="0" class="input_item main_item base_main" onclick="showEmoticon();" id="emo_item">
										<i class="fa fa-smile-o bblock"></i>
									</div>
									<div class="input_item main_item sub_main main_hide">
										<i class="fa fa-minus input_icon bblock"></i>
									</div>
									<?php if(canColor()){ ?>
									<div class="input_item main_item sub_main sub_options main_hide" onclick="getTextOptions();">
										<i class="fa fa-font input_icon bblock"></i>
									</div>
									<?php } ?>
									<div id="main_input_box" class="td_input">
										<input type="text" spellcheck="false" name="content" onselectstart="return false" onpaste="return false;" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" placeholder="<?php echo $lang['type_something']; ?>" maxlength="<?php echo $data['max_main']; ?>" id="content" autocomplete="off"/>
									</div>
									<?php if( canUpload()){ ?>
									<div class="input_item main_item base_main" id="send_image"><i id="chat_file_icon" data="fa-paperclip" class="fa fa-paperclip bblock"></i>
										<input id="chat_file" onchange="uploadChat();" type="file"/>
									</div>
									<?php } ?>	
									<div id="inputt_right" class="main_item">
										<button type="submit"  class="default_btn csend" id="submit_button"><i class="fa fa-paper-plane"></i></button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="chat_right" class="cright chat_panel prheight">
		<div id="chat_right_content" class="prheight">
			<div class="wrap_right_data" class="prheight">
				<div id="right_panel_bar" class="panel_bar">
					<div onclick="toggleRight();" class="panel_bar_item">
						<i class="fa fa-times"></i>
					</div>
					<div class="bcell_mid">
					</div>
				</div>
				<div id="chat_right_data" class="crheight">
				</div>
			</div>
		</div>
	</div>
</div>
<div id="private_box">
	<div class="top_panel btable top_background" id="private_top">
		<?php if(boomAllow(1)){ ?>
		<div class="bcell_mid crt_item">
			<i class="fa fa-user"></i>
		</div>
		<?php } ?>
		<div id="private_name" class="bcell_mid bellips <?php if(!boomAllow(1)){ echo 'lpad10'; } ?>">
			<p class="bellips"></p>
		</div>
		<div  title="<?php echo $lang['close']; ?>" id="private_close" class="bcell_mid crt_item">
			<i class="fa fa-times"></i>
		</div>
	</div>
	<div id="private_content" class="background_box" value="1">
		<ul>
		</ul>
	</div>
	<div id="private_input" class="input_wrap">
		<form id="message_form"  action="" method="post" name="private_form">
			<div class="input_table">
				<div value="0" id="emo_item_priv" class="input_item main_item">
					<i class="fa fa-smile-o"></i>
				</div>
				<div id="private_input_box" class="td_input">
					<input spellcheck="false" id="message_content" placeholder="<?php echo $lang['type_something']; ?>" maxlength="<?php echo $data['max_private']; ?>" data-target=""  autocomplete="off"/>
				</div>
				<?php if( canUpload()){ ?>
				<div class="input_item main_item"><i id="private_file_icon" data="fa-paperclip" class="fa fa-paperclip"></i>
					<input id="private_file" onchange="uploadPrivate();" type="file"/>
				</div>
				<?php } ?>
				<div id="message_send" class="main_item">
					<button class="default_btn csend" id="private_send"><i class="fa fa-paper-plane"></i></button>
				</div>
			</div>
		</form>
		<div id="private_emoticon" class="background_box">
			<div class="emo_head private_emo_head">
				<?php if(emoPlus()){ ?>
					<div data="base_emo" class="dark_selected emo_menu emo_menu_item_priv"><img class="emo_select" src="emoticon_icon/base_emo.png"/></div>
					<?php echo emoItem(2); ?>
				<?php } ?>
				<div class="empty_emo">
				</div>
				<div class="emo_menu" id="emo_close_priv">
					<i class="fa fa-times"></i>
				</div>
			</div>
			<div id="private_emo" class="emo_content_priv">
				<?php listSmilies(2); ?>
			</div>
		</div>
	</div>
</div>
<div id='container_stream' class="background_stream">
	<div id='stream_header'>
		<i id='close_stream' class='fa fa-times'></i>
	</div>
	<div id='wrap_stream'>
		<iframe src='' allowfullscreen scrolling='no' frameborder='0'></iframe>
	</div>
</div>
<div id="wrap_footer" data="1" >
	<div class="chat_footer" id="menu_container">
		<div id="menu_container_inside">
			<?php if(usePlayer()){ ?>
			<div id="player_options" class="player_options sysmenu add_shadow hideall hidden">
				<?php if(boomAllow($data['allow_player'])){ ?>
				<div class="player_list_container">
					<p class="text_xsmall bold bpad5 rtl_elem"><?php echo $lang['station_list']; ?></p>
					<div id="player_listing">
						<?php echo playerList(); ?>
					</div>
				</div>
				<?php } ?>
				<div class="player_volume">
					<div id="sound_display" class="bcell_mid">
						<i class="fa fa-volume-down show_sound"></i>
					</div>
					<div id="player_volume" class="bcell_mid boom_slider">
						<div id="slider"></div>
					</div>
				</div>
			</div>
			<?php } ?>
			<div id="my_menu">
				<div class="chat_footer_empty bcell_mid">
					<?php if(usePlayer()){ ?>
					<div class="chat_player">
						<div class="player_menu player_elem" onclick="showMenu('player_options');" >
							<i class="fa fa-sliders"></i>
						</div>
						<div id="player_actual_status" class="player_elem player_button turn_on_play">
							<i id="current_play_btn" class="fa fa-play-circle"></i>
						</div>
						<div id="current_player" class="player_elem player_current">
							<p class="bellips text_xsmall theme_color"><?php echo $lang['station']; ?></p>
							<p class="bellips" id="current_station"><?php echo $radio['player_title']; ?></p>
						</div>
					</div>
					<?php } ?>
				</div>
				<div onclick="getRoomList();" class="chat_footer_item">
					<i class="i_btm fa fa-home"></i>
				</div>
				<div title="<?php echo $lang['user_list']; ?>" onclick="userReload(1);" class="chat_footer_item">
					<i class="i_btm fa fa-users"></i>
				</div>
				<?php if(boomAllow(1)){ ?>
				<div title="<?php echo $lang['friend_list']; ?>" onclick="myFriends(1);" class="chat_footer_item">
					<i class="i_btm fa fa-user-plus"></i>
				</div>
				<?php } ?>
			</div>
		</div>
	</div>
</div>
<div id="av_menu" class="sub_menu">
	<ul class="avlist">
		<li data="" value=""  class="avitem gprivate avpriv"><?php echo $lang['private_chat']; ?></li>
		<li data="" class="avitem get_info"><?php echo $lang['info']; ?></li>
	</ul>
</div>
<div id="monitor_data" onclick="getMonitor();">
	<p>Count: <span id="logs_counter">0</span></p>
	<p>Speed: <span id="current_speed">0</span></p>
	<p>Latency: <span id="current_latency">0</span></p>
</div>
<div id="action_menu" class="hidden">
	<?php echo boomTemplate('element/actions'); ?>
</div>
<?php loadAddonsJs();?>
<script data-cfasync="false" src="js/function.js<?php echo $bbfv; ?>"></script>
<script data-cfasync="false" src="js/player.js<?php echo $bbfv; ?>"></script>
