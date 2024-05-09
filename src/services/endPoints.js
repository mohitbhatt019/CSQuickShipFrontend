import LoginScreen from "../screens/authScreen/loginScreen";

const ENDPOINTS = {
    LOGIN: "login",
    REGISTER: "register",
    ADMIN_LOGIN: "/admin/login",
    SCHOOL_LIST: "/school/list",
    ADD_SCHOOL: "/school/createSchool",
    SCHOOL: "/school",
    SCHOOL_STATUS: "/updateSchoolStatus",
    SCHOOL_GRADE_LEVELS: "/schoolLevel",
    SCHOOL_GRADE: "/schoolGrade",
  
    GRADE_LEVELS: "/gradeLevel",
    USER: "/admin/user",
    USER_DETAIL: "/admin/user/detail",
    USER_STATUS: "/updateUserStatus",
  
    DASHBOARD_LIST: "/admin/statistics",
    LESSONS: "/lesson",
    LESSONS_DETAIL: "/lesson/detail",
  
    ACTIVITY: "/activity",
    ACTIVITY_DETAIL: "/activity/detail",
  
    ACTIVITY_TYPES: "/activityType",
    CURRICULUM: "/curriculumn",
    CURRICULUM_DETAILS: "/curriculumn/detail",
    RESOURCES: "/resource",
    RESOURCES_DETAILS: "/resource/detail",
    RESOURCES_TYPE: "/resourceType",
    CORE_SKILLS: "/coreSkill",
  };
  
  export default ENDPOINTS;
  