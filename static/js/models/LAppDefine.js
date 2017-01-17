var LAppDefine = {
	// DEBUG
	DEBUG_LOG       : false,
	DEBUG_MOUSE_LOG : false,

	// VIEW SETTINGS
	VIEW_MAX_SCALE          : 2,
	VIEW_MIN_SCALE          : 0.8,
	VIEW_LOGICAL_LEFT       : -1,
	VIEW_LOGICAL_RIGHT      : 1,
	VIEW_LOGICAL_MAX_LEFT   : -2,
	VIEW_LOGICAL_MAX_RIGHT  : 2,
	VIEW_LOGICAL_MAX_BOTTOM : -2,
	VIEW_LOGICAL_MAX_TOP    : 2,

	// PRIORITY
	PRIORITY_NONE   : 0,
	PRIORITY_IDLE   : 1,
	PRIORITY_NORMAL : 2,
	PRIORITY_FORCE  : 3,

	// MODELS
		// ASUNA
			// SAO
				SAO_ASUNA_01 : "assets/asuna/01.sao",
				SAO_ASUNA_02 : "assets/asuna/02.sao",
				SAO_ASUNA_03 : "assets/asuna/03.sao",
				SAO_ASUNA_04 : "assets/asuna/04.sao",
				SAO_ASUNA_05 : "assets/asuna/05.sao",
				SAO_ASUNA_06 : "assets/asuna/06.sao",
				SAO_ASUNA_07 : "assets/asuna/07.sao",
				SAO_ASUNA_08 : "assets/asuna/08.sao",
				SAO_ASUNA_09 : "assets/asuna/09.sao",
				// SAO_ASUNA_10 : "assets/asuna/10.sao",
				// SAO_ASUNA_11 : "assets/asuna/11.sao",
				SAO_ASUNA_12 : "assets/asuna/12.sao",
				SAO_ASUNA_13 : "assets/asuna/13.sao",
				SAO_ASUNA_14 : "assets/asuna/14.sao",
				SAO_ASUNA_15 : "assets/asuna/15.sao",
				SAO_ASUNA_16 : "assets/asuna/16.sao",
				SAO_ASUNA_17 : "assets/asuna/17.sao",
				SAO_ASUNA_18 : "assets/asuna/18.sao",
				SAO_ASUNA_19 : "assets/asuna/19.sao",
				SAO_ASUNA_20 : "assets/asuna/20.sao",
				SAO_ASUNA_21 : "assets/asuna/21.sao",
				SAO_ASUNA_22 : "assets/asuna/22.sao",
				SAO_ASUNA_23 : "assets/asuna/23.sao",
				SAO_ASUNA_24 : "assets/asuna/24.sao",
				SAO_ASUNA_25 : "assets/asuna/25.sao",
				SAO_ASUNA_26 : "assets/asuna/26.sao",
				SAO_ASUNA_27 : "assets/asuna/27.sao",
				SAO_ASUNA_28 : "assets/asuna/28.sao",
				SAO_ASUNA_29 : "assets/asuna/29.sao",
				SAO_ASUNA_30 : "assets/asuna/30.sao",
				SAO_ASUNA_31 : "assets/asuna/31.sao",
				// SAO_ASUNA_32 : "assets/asuna/32.sao",
				SAO_ASUNA_33 : "assets/asuna/33.sao",
				SAO_ASUNA_34 : "assets/asuna/34.sao",
				SAO_ASUNA_35 : "assets/asuna/35.sao",
				SAO_ASUNA_36 : "assets/asuna/36.sao",
				SAO_ASUNA_37 : "assets/asuna/37.sao",
				SAO_ASUNA_38 : "assets/asuna/38.sao",
				SAO_ASUNA_39 : "assets/asuna/39.sao",
				SAO_ASUNA_40 : "assets/asuna/40.sao",
				SAO_ASUNA_41 : "assets/asuna/41.sao",
				// SAO_ASUNA_42 : "assets/asuna/42.sao",
				SAO_ASUNA_43 : "assets/asuna/43.sao",
				// SAO_ASUNA_44 : "assets/asuna/44.sao",
				SAO_ASUNA_45 : "assets/asuna/45.sao",
			// ALO
				ALO_ASUNA_01 : "assets/asuna/01.alo",
				ALO_ASUNA_02 : "assets/asuna/02.alo",
				ALO_ASUNA_03 : "assets/asuna/03.alo",
				ALO_ASUNA_04 : "assets/asuna/04.alo",
				ALO_ASUNA_05 : "assets/asuna/05.alo",
				ALO_ASUNA_06 : "assets/asuna/06.alo",
				ALO_ASUNA_07 : "assets/asuna/07.alo",
				ALO_ASUNA_08 : "assets/asuna/08.alo",
				ALO_ASUNA_09 : "assets/asuna/09.alo",
				// ALO_ASUNA_10 : "assets/asuna/10.alo",
				// ALO_ASUNA_11 : "assets/asuna/11.alo",
				ALO_ASUNA_12 : "assets/asuna/12.alo",
				ALO_ASUNA_13 : "assets/asuna/13.alo",
				ALO_ASUNA_14 : "assets/asuna/14.alo",
				ALO_ASUNA_15 : "assets/asuna/15.alo",
				ALO_ASUNA_16 : "assets/asuna/16.alo",
				ALO_ASUNA_17 : "assets/asuna/17.alo",
				ALO_ASUNA_18 : "assets/asuna/18.alo",
				ALO_ASUNA_19 : "assets/asuna/19.alo",
				ALO_ASUNA_20 : "assets/asuna/20.alo",
				ALO_ASUNA_21 : "assets/asuna/21.alo",
				ALO_ASUNA_22 : "assets/asuna/22.alo",
				ALO_ASUNA_23 : "assets/asuna/23.alo",
				ALO_ASUNA_24 : "assets/asuna/24.alo",
				ALO_ASUNA_25 : "assets/asuna/25.alo",
				ALO_ASUNA_26 : "assets/asuna/26.alo",
				ALO_ASUNA_27 : "assets/asuna/27.alo",
				ALO_ASUNA_28 : "assets/asuna/28.alo",
				ALO_ASUNA_29 : "assets/asuna/29.alo",
				ALO_ASUNA_30 : "assets/asuna/30.alo",
				ALO_ASUNA_31 : "assets/asuna/31.alo",
				// ALO_ASUNA_32 : "assets/asuna/32.alo",
				ALO_ASUNA_33 : "assets/asuna/33.alo",
				ALO_ASUNA_34 : "assets/asuna/34.alo",
				ALO_ASUNA_35 : "assets/asuna/35.alo",
				ALO_ASUNA_36 : "assets/asuna/36.alo",
				ALO_ASUNA_37 : "assets/asuna/37.alo",
				ALO_ASUNA_38 : "assets/asuna/38.alo",
				ALO_ASUNA_39 : "assets/asuna/39.alo",
				ALO_ASUNA_40 : "assets/asuna/40.alo",
				ALO_ASUNA_41 : "assets/asuna/41.alo",
				// ALO_ASUNA_42 : "assets/asuna/42.alo",
				ALO_ASUNA_43 : "assets/asuna/43.alo",
				// ALO_ASUNA_44 : "assets/asuna/44.alo",
				ALO_ASUNA_45 : "assets/asuna/45.alo",
		// LIKO
			LIKO_01 : "assets/liko/01.json",
			LIKO_02 : "assets/liko/02.json",
			// LIKO_03 : "assets/liko/03.json",
			LIKO_04 : "assets/liko/04.json",
			LIKO_05 : "assets/liko/05.json",
			LIKO_06 : "assets/liko/06.json",
			// LIKO_07 : "assets/liko/07.json",
			LIKO_08 : "assets/liko/08.json",
			LIKO_09 : "assets/liko/09.json",
			LIKO_10 : "assets/liko/10.json",
			LIKO_11 : "assets/liko/11.json",
			LIKO_12 : "assets/liko/12.json",
			LIKO_13 : "assets/liko/13.json",
			LIKO_14 : "assets/liko/14.json",
			LIKO_15 : "assets/liko/15.json",
			LIKO_16 : "assets/liko/16.json",
			LIKO_17 : "assets/liko/17.json",
			LIKO_18 : "assets/liko/18.json",
			LIKO_SP : "assets/liko/sp.json",
			LIKO_SP1 : "assets/liko/sp1.json",
			LIKO_SP2 : "assets/liko/sp2.json",
		// KATO
			KATO_01 : "assets/kato/01.json",
		// HARU
			HARU_01 : "assets/haru/01.json",
			HARU_02 : "assets/haru/02.json",
		// ERIKA
			ERIKA_01 : "assets/erika/01.json",
		// WANKO
			WANKO_01 : "assets/wanko/01.json",
		// SHIZUKU
			SHIZUKU_01 : "assets/shizuku/01.json",
		// EPSILON
			EPSILON_01 : "assets/epsilon/01.json",
		// YUKARI
			YUKARI_01 : "assets/yukari/01.json",
		// TSUKIMI
			TSUKIMI_01 : "assets/tsukimi/01.json",

	// MOTIONS
	MOTION_GROUP_IDLE       : "idle",
	MOTION_GROUP_TAP_BODY   : "tap_body",
	MOTION_GROUP_FLICK_HEAD : "flick_head",
	MOTION_GROUP_PINCH_IN   : "pinch_in",
	MOTION_GROUP_PINCH_OUT  : "pinch_out",
	MOTION_GROUP_SHAKE      : "shake",

	// HIT AREAS
	HIT_AREA_HEAD  : "head",
	HIT_AREA_CHEST : "chest",
	HIT_AREA_BODY  : "body",
	HIT_AREA_FOOT  : "foot"
};