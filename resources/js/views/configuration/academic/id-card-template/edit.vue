<template>
    <div>
        <div class="page-titles">
            <div class="row">
                <div class="col-12 col-sm-6">
                    <h3 class="text-themecolor">{{trans('academic.edit_id_card_template')}}</h3>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="action-buttons pull-right">
                        <button class="btn btn-info btn-sm" @click="$router.push('/configuration/academic/id-card/template')"><i class="fas fa-list"></i> <span class="d-none d-sm-inline">{{trans('academic.id_card_template')}}</span></button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="card card-form">
                <div class="card-body p-t-20">
                    <id-card-template-form :id="id"></id-card-template-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import idCardTemplateForm from './form';

    export default {
        components : { idCardTemplateForm },
        data() {
            return {
                id:this.$route.params.id
            }
        },
        mounted(){
            if(!helper.hasPermission('access-configuration')){
                helper.notAccessibleMsg();
                this.$router.push('/dashboard');
            }
        }
    }
</script>
