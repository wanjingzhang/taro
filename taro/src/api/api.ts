import http from './http' 

const install = () =>{
	let api = {} 
	// --------------- 公共接口 --------------------
	// 小程序授权
	api.AppLogin = (params) => http.post('?method=AppLogin',params);
	
	// 近期预约
	api.RecentAppointment = (params) => http.post('?method=RecentAppointment',params);
	
	// 查询我的礼品卡 
	api.GetUserCoupons = (params) => http.post('?method=GetUserCoupons',params);
	
	// 获取服务器时间 
	api.GetDateTime = (params) => http.post('?method=GetDateTime',params);
	
	// 保存用户基本信息 
	api.DecodeUserInfo = (params) => http.post('?method=DecodeUserInfo',params);
	
	// 手机号解密
	api.OpenPhone = (params) => http.post('?method=OpenPhone',params);
	
	// 兑换课时券 
	api.ExchangeCoupons = (params) => http.post('?method=ExchangeCoupons',params);
	
	// ---------------- 餐厅 & 品茗 ------------------
	// 查询预约餐厅/品茗详情
	api.GetSipteaSubscribeUserInfo = (params) => http.post('?method=GetSipteaSubscribeUserInfo',params);
	
	// 查询预约餐厅/品茗记录
	api.GetSipteaSubscribeUserList = (params) => http.post('?method=GetSipteaSubscribeUserList',params);
	
	// 预约餐厅/品茗
	api.SipteaSubscribeUser = (params) => http.post('?method=SipteaSubscribeUser',params);
	
	// 查询餐厅/品茗 时间段
	api.RestaurantSipteaTimePeriod = (params) => http.post('?method=RestaurantSipteaTimePeriod',params);
	
	// 查询餐厅/品茗 时间
	api.RestaurantSipteaTime = (params) => http.post('?method=RestaurantSipteaTime',params);
	
	// 查询餐厅/品茗
	api.RestaurantSiptea = (params) => http.post('?method=RestaurantSiptea',params);
	
	
	// -----------  瑜伽/冥想/活动  -------------
	// 查询 瑜伽/冥想/活动详情信息
	api.GetCurriculumSubscribeUserInfo = (params) => http.post('?method=GetCurriculumSubscribeUserInfo',params);
	
	// 取消预约 瑜伽/冥想/活动
	api.CancelCurriculum = (params) => http.post('?method=CancelCurriculum',params);
	
	// 查询 预约过的瑜伽/冥想/活动
	api.GetSubscribeUserList = (params) => http.post('?method=GetSubscribeUserList',params);
	
	// 预约 瑜伽/冥想/活动
	api.SubscribeUser = (params) => http.post('?method=SubscribeUser',params);
	
	// 查询活动详情
	api.GetActivitiesInfo = (params) => http.post('?method=GetActivitiesInfo',params);
	
	// 查询活动列表
	api.GetActivitiesList = (params) => http.post('?method=GetActivitiesList',params);
	
	// 查询瑜伽课/冥想课
	api.GetCurriculum = (params) => http.post('?method=GetCurriculum',params);
	 
} 


export default{
	install
}