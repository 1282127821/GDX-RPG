package com.rpsg.rpg.game.script;

import com.badlogic.gdx.graphics.Color;
import com.rpsg.rpg.core.Setting;
import com.rpsg.rpg.object.script.BaseScriptExecutor;
import com.rpsg.rpg.object.script.Script;
import com.rpsg.rpg.system.base.Res;
import com.rpsg.rpg.system.controller.CGController;
import com.rpsg.rpg.system.ui.Image;
import com.rpsg.rpg.utils.game.GameUtil;
import com.rpsg.rpg.utils.game.Logger;
import com.rpsg.rpg.utils.game.Move;

public class Teleporter extends Script {
	
	@Override
	public void init() {
		Logger.info("地图传送模块正被执行。");
		$(new BaseScriptExecutor() {
			@Override
			public void init() {
				Move.teleportAnotherMap(Teleporter.this, npc.params.get("TELEPORT") + ".tmx",
						Integer.parseInt((String) npc.params.get("TELEPORTX")),
						Integer.parseInt((String) npc.params.get("TELEPORTY")),
						Integer.parseInt((String) npc.params.get("TELEPORTZ")));
			}
		});
	}


}
