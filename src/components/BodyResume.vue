<template>
        <div class="container px-5 my-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Resume</span></h1>
            </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <!-- Experience Section-->
                        <SectionExperience />
                        <!-- Education Section-->
                        <SectionEducation />
                    
                        <!-- Divider-->
                        <div class="pb-5"></div>
                        <!-- Skills Section-->
                        <SectionKills />
                        
                    </div>
                </div>
        </div>
</template>
  
<script>

import SectionExperience from '@/components/SectionExperience.vue';
import SectionEducation from '@/components/SectionEducation.vue';
import SectionKills from '@/components/SectionKills.vue';


  export default {
    name: 'BodyResume',
    components: {
        SectionExperience,
        SectionEducation,
        SectionKills,
    },
  };
</script>
  