## Ansible Kubespray

I have tried this in my homelab and it worked flawlessly for testing; however, for production, its deployment, upgrade and many feature options are less desirable than those of RKE2.

## RKE2

I found RKE2 to be the easiest to deploy and upgrade. It works without any preliminary setup. It is made by Rancher, a well-known company that provides support for and makes Kubernetes engines.

## Others

Honorable mentions: Kubesphere, Kubekey, K3s, RKE. I have also looked at storage solutions such as Portworkx and OpenEBS. However, I have no need for them as I was not going to deploy databases in Kubernetes due to management complexity. Furthermore, I have looked at cluster backup solutions such as Velero, Stach K8 and Kasten K10 as well.
