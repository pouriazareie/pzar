async function deletes(){
try{
var loopcount=100;//-------تعداد ای پی برای پاک شدن در هر صحفه
for(var i=1;i<loopcount;){
document.querySelector("#single-spa-application\\:\\@cloudflare\\/monolith > div > div > div.c_cm > div > main > div > div.c_cu.c_j.c_eb > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(2) > div:nth-child("+i+") > div > div:nth-child(3) > div > button.c_tn.c_bb.c_to.c_tp.c_tq.c_tr.c_nr.c_ts.c_tt.c_tu.c_tv.c_tw.c_nx.c_u.c_p.c_gc.c_hk.c_ny.c_nz.c_oa.c_ob.c_oc.c_od.c_dx.c_cs.c_oe.c_of.c_og.c_oh.c_oi.c_oj.c_ok.c_en.c_ck.c_gd.c_ol.c_om.c_on.c_t.c_oo.c_op.c_ao.c_ds.c_hu.c_dt.c_ci.c_tx.c_ty.c_bg.c_bh.c_tz.c_e.c_os.c_dc.c_ot.c_ou").click();//---کلیک بروی ایکون ضربدر ذیلت
await sleep(500); //--- تاخیر نیم صدم ثانیه

++i
document.querySelector("body > div:nth-child(8) > div > div > div > div > div.c_ck.c_au.c_av.c_qn.c_qm.c_un.c_uo.c_pb.c_pc > div > div > button.c_nl.c_nm.c_nn.c_no.c_np.c_nq.c_nr.c_ns.c_nt.c_nu.c_nv.c_nw.c_nx.c_u.c_p.c_gc.c_hk.c_ny.c_nz.c_oa.c_ob.c_oc.c_od.c_dx.c_cs.c_oe.c_of.c_og.c_oh.c_oi.c_oj.c_ok.c_en.c_ck.c_gd.c_ol.c_om.c_on.c_t.c_oo.c_op.c_ao.c_ds.c_hu.c_dt.c_ag.c_aw.c_ax.c_bg.c_bh.c_fb.c_or.c_os.c_dc.c_ot.c_ou").click();//---کلیک بزوی کانفرم
}
}catch(errer){}

}deletes();
